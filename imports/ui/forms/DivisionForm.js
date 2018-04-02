import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { Paper, FloatingActionButton, TextField } from "material-ui";
import { List, ListItem } from "material-ui/List";
import AddCircle from "material-ui/svg-icons/content/add-circle";
import Division from "../../api/divisions/divisions";

const createDivision = gql`
	mutation createDivision($name: String) {
		createDivision(name: $name) {
			_id
		}
	}
`;

class DivisionForm extends React.Component {

	handleSubmit = e => {
		console.log(this.name);
		e.preventDefault();
		this.props.createDivision({
			variables: {
				name: this.name
			}
		});
	};

	handleChange = (e, val) => {
		this.name = val;
	};

	render() {
		return (
			<Paper style={styles.test}>
				<h2>Lisää aihepiiri</h2>
				<TextField floatingLabelText="Aihe" onChange={this.handleChange} />
				<FloatingActionButton mini="true" onClick={this.handleSubmit}>
					<AddCircle />
				</FloatingActionButton>
				<List>
					{this.props.divisions.map(div => (
            <ListItem>{div.name}</ListItem>
          ))}
				</List>
			</Paper>
		);
	}
}

export default graphql(createDivision, {
	name: "createDivision",
	options: {
		refetchQueries: ["divisions"]
	}
})(DivisionForm);

const styles = {
	test: {
		margin: 20,
		padding: 20
	}
};