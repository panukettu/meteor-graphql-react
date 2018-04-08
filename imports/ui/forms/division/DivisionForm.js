import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { Paper, FloatingActionButton, TextField } from "material-ui";
import { List, ListItem } from "material-ui/List";
import AddCircle from "material-ui/svg-icons/content/add-circle";

const createDivision = gql`
	mutation createDivision($name: String) {
		createDivision(name: $name) {
			_id
		}
	}
`;

class DivisionForm extends React.Component {
	handleSubmit = e => {
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
			<Paper style={styles.container}>
				<h2>Lisää aihepiiri</h2>
				<TextField floatingLabelText="Aihe" onChange={this.handleChange} />
				<FloatingActionButton mini={true} onClick={this.handleSubmit}>
					<AddCircle />
				</FloatingActionButton>
				<List style={styles.makeScrollable}>
					{this.props.divisions.map(div => (
						<ListItem key={div._id}>{div.name}</ListItem>
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
	container: {
		margin: 20,
		padding: 20
	},
	makeScrollable: {
		height: "75%",
		overflow: "auto"
	}
};
