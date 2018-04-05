import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

const mutation = gql`
	mutation createGoal($name: String!, $resolutionId: String!) {
		createGoal(name: $name, resolutionId: $resolutionId) {
			_id
		}
	}
`;

class GoalForm extends React.Component {
	submitForm = e => {
		e.preventDefault();
		this.props
			.createGoal({
				variables: {
					name: this.name.value,
					resolutionId: this.props.resolutionId
				}
			})
			.catch(error => console.log(error));
		console.log(this.props.resolutionId, this.name.value);
	};

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<input type="text" ref={input => (this.name = input)} />
				<button type="submit">Lisää</button>
			</form>
		);
	}
}

export default graphql(mutation, {
	name: "createGoal"
})(GoalForm);
