import React, { Component } from "react";

import { FloatingActionButton, TextField, Subheader, Paper } from "material-ui";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { List, ListItem, makeSelectable } from "material-ui/List";

import ActionInfo from "material-ui/svg-icons/action/info";
import DeleteDivision from "../../forms/DeleteDivision";
import SkillForm, { SkillList } from "../skills/Skills";
import Alarm from "material-ui/svg-icons/action/alarm";
const mutation = gql`
	mutation createDivision($name: String!) {
		createDivision(name: $name) {
			_id
		}
	}
`;

class Divisions extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
	}
	submitForm = () => {
		this.props
			.createDivision({
				variables: {
					name: this.name
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	handleChange(e, value) {
		this.name = value;
	}

	render() {
		return (
			<div style={styles.divisionsContainer}>
				<TextField
					floatingLabelText="Division"
					onChange={this.handleChange.bind(this)}
				/>
				<FloatingActionButton
					onClick={this.submitForm}
					mini={true}
					iconClassName="ContentAdd"
				/>
				<List>
					<Subheader>Divisions</Subheader>
					{this.props.divisions.map(division => (
						<Paper style={styles.divisionsContainer}>
							<ListItem
								key={division._id}
								rightIcon={<DeleteDivision _id={division._id} />}
								open={this.state.open}
								nestedItems={division.skills.map(i => (
									<ListItem leftIcon={<Alarm />} key={i._id}>
										{i.name}
									</ListItem>
								))}
							>
								<h2 onClick={() => this.setState({ open: !this.state.open })}>
									{division.name}
								</h2>
								<SkillForm
									divisionId={division._id}
									skills={division.skills}
								/>
							</ListItem>
						</Paper>
					))}
				</List>
			</div>
		);
	}
}

export default graphql(mutation, {
	name: "createDivision",
	options: {
		refetchQueries: ["divisions"]
	}
})(Divisions);

const styles = {
	divisionsContainer: {
		margin: 10
	}
};
