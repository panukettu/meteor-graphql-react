import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { ListItem } from "material-ui";
import Avatar from "material-ui/Avatar";
import Backspace from "material-ui/svg-icons/content/backspace";

const deleteSkill = gql`
	mutation deleteSkill($_id: String) {
		deleteSkill(_id: $_id) {
			_id
		}
	}
`;

const Skill = ({ skill, deleteSkill }) => {
	handleDelete = () => {
		deleteSkill({
			variables: {
				_id: skill._id
			}
		});
	};
	return (
		<ListItem leftAvatar={<Avatar src={skill.url} size={32} />} secondaryText={skill.info}>
			{skill.name} <Backspace onClick={this.handleDelete} />
		</ListItem>
	);
};

export default graphql(deleteSkill, {
	name: "deleteSkill",
	options: {
		refetchQueries: ["divisions"]
	}
})(Skill);
