import React from "react";

import { List, ListItem } from "material-ui/List";

import SkillForm from "../../forms/SkillForm";
import Skill from "./Skill";

const Skills = ({ skills, divisionId }) => {
	return (
		<List>
			{skills.map(skill => <Skill skill={skill} />)}
			<ListItem>
				<SkillForm divisionId={divisionId} />
			</ListItem>
		</List>
	);
};

export default Skills;

const styles = {
	skillItem: {
		fontSize: 12
	},
	removeItem: {
		color: "red"
	}
};
