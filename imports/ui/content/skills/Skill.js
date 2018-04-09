import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { ListItem } from "material-ui";
import Avatar from "material-ui/Avatar";

import UserContext from "../../user-context";
import AdminTool from "./AdminTool";

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
		<ListItem
			leftAvatar={<Avatar src={skill.url} size={32} />}
			secondaryText={skill.info}
		>
			{skill.name}
			<UserContext.Consumer>
				{({ user }) =>
					user && user.isAdmin ? (
						<AdminTool
							skill={skill}
							deleteSkill={this.handleDelete.bind(this)}
						/>
					) : (
						""
					)
				}
			</UserContext.Consumer>
		</ListItem>
	);
};

export default graphql(deleteSkill, {
	name: "deleteSkill",
	options: {
		refetchQueries: ["divisions"]
	}
})(Skill);
