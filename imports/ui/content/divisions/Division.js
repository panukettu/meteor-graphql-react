import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import { TextField, FloatingActionButton } from "material-ui";

import Skills from "../skills/Skills";

const deleteDivision = gql`
	mutation deleteDivision($_id: String) {
		deleteDivision(_id: $_id) {
			_id
		}
	}
`;

class Division extends React.Component {
	state = {
		error: false
	};

	handleDelete = () => {
		this.props
			.deleteDivision({
				variables: {
					_id: this.props.division._id
				}
			})
			.catch(error => this.setState({ error: error.message }));
	};

	render() {
		const { division } = this.props;

		return (
			<List>
				<ListItem
					leftAvatar={
						<Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
					}
				>
					<span style={styles.divisionTitle}>{division.name}</span>
				</ListItem>
				<Skills skills={division.skills} divisionId={division._id} />
				<ListItem style={styles.removeItem} onClick={this.handleDelete}>
        {this.state.error && <p>{this.state.error}</p>}
					Poista
				</ListItem>
			</List>
		);
	}
}

export default graphql(deleteDivision, {
	name: "deleteDivision",
	options: {
		refetchQueries: ["divisions"]
	}
})(Division);

const styles = {
	divisionTitle: {
		borderBottom: "1px solid white",
		fontSize: "2em"
	}
};
