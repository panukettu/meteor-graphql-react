import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { List, ListItem } from "material-ui/List";
import { TextField, IconButton } from "material-ui";
import ContentAdd from "material-ui/svg-icons/content/add";
import Alarm from "material-ui/svg-icons/action/alarm";

const mutation = gql`
	mutation createSkill($name: String!, $divisionId: String!, $info: String, $level: Int) {
		createSkill(name: $name, divisionId: $divisionId, info: $info, level: $level) {
			_id
		}
	}
`;

class SkillForm extends React.Component {
	submitForm = e => {
		e.preventDefault();
		this.props
			.createSkill({
				variables: {
					name: this.name,
          divisionId: this.props.divisionId,
          info: this.info,
          level: this.level
				}
			})
			.catch(error => console.log(error));
	};

	handleChange = (e, val) => {
		this.name = val;
  };
  handleInfoChange = (e, val) => {
		this.info = val;
  };
  handleLevelChange = (e, val) => {
		this.level = val;
	};

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<TextField
					type="text"
					floatingLabelText="Skill"
					onChange={this.handleChange}
				/>
        <TextField
					type="text"
					floatingLabelText="Info"
					onChange={this.handleInfoChange}
				/>
         <TextField
					type="number"
					floatingLabelText="Level"
					onChange={this.handleLevelChange}
				/>
				<IconButton tooltip="Add skill!" type="submit">
					<ContentAdd />
				</IconButton>
			</form>
		);
	}
}

export const SkillList = ({ skills }) =>
	skills.map(i => (
		<ListItem leftIcon={<Alarm />} key={i._id}>
			{i.name}
		</ListItem>
	));

export default graphql(mutation, {
	name: "createSkill",
	options: {
		refetchQueries: ["divisions"]
	}
})(SkillForm);
