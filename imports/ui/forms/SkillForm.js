import React, { Component } from "react";
import {
	FlatButton,
	Dialog,
	FloatingActionButton,
	TextField
} from "material-ui";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import AddCircle from "material-ui/svg-icons/content/add-circle";

const createSkill = gql`
	mutation createSkill(
    $divisionId: String
		$name: String
		$info: String
		$level: Int
		$url: String
	) {
		createSkill(divisionId: $divisionId, name: $name, info: $info, level: $level, url: $url) {
			_id
		}
	}
`;

class SkillForm extends React.Component {
	state = {
		open: false
	};

	handleOpen = () => {
		this.setState({ open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
	};

	handleSubmit = () => {
		console.log(this.name, this.level, this.url);
		this.props.createSkill({
			variables: {
        divisionId: this.props.divisionId,
				name: this.name,
				info: this.info,
				level: this.level,
        url: this.url,
			}
		});
		this.setState({ open: false });
	};

	nameChange = (e, val) => {
		this.name = val;
	};

	levelChange = (e, val) => {
		this.level = val;
	};

	infoChange = (e, val) => {
		this.info = val;
	};

	urlChange = (e, val) => {
		this.url = val;
	};

	render() {
		const actions = [
			<FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
			<FlatButton label="Add" primary={true} onClick={this.handleSubmit} />
		];

		return (
			<div>
			<AddCircle onClick={this.handleOpen}/>
				<Dialog
					actions={actions}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<TextField  fullWidth={true} floatingLabelText="Taito" onChange={this.nameChange} />
					<TextField  fullWidth={true} floatingLabelText="Taso" onChange={this.levelChange} />
					<TextField
						floatingLabelText="Lisätietoja"
            multiLine={true}
            fullWidth={true}
						rows={4}
						onChange={this.infoChange}
					/>
					<TextField  fullWidth={true} floatingLabelText="Ikoni-URL" onChange={this.urlChange} />
				</Dialog>
			</div>
		);
	}
}

export default graphql(createSkill, {
	name: "createSkill",
	options: {
		refetchQueries: ["divisions"]
	}
})(SkillForm);
