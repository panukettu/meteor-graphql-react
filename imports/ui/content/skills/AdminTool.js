import React from "react";

import Backspace from "material-ui/svg-icons/content/backspace";

import Toggle from "./Toggle";

export default (AdminTool = ({ skill, deleteSkill }) => {
	handleDelete = () => {
		deleteSkill();
	};

	return (
		<div>
			<Backspace onClick={handleDelete} />
			<Toggle _id={skill._id} completed={skill.completed} />
		</div>
	);
});
