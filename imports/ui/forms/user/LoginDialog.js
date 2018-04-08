import React from "react";

import {
	Dialog,
	TextField,
	RaisedButton
} from "material-ui";

import { LoginButton, LogoutButton } from './LoginButton';

import UserContext from "../../user-context";

export default class LoginDialog extends React.Component {
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
		Meteor.loginWithPassword(this.email, this.password);
	};

	emailChange = (e, val) => {
		this.email = val;
	};

	passwordChange = (e, val) => {
		this.password = val;
	};

	render() {
		const actions = [
			<RaisedButton
				type="submit"
				label="Login"
				primary={true}
				onClick={this.handleSubmit}
			/>
		];

		return (
			<div>
				<UserContext.Consumer>
					{user => user && user._id ? <LogoutButton/> : <LoginButton handleOpen={this.handleOpen.bind(this)} style={this.props.style}/>}
				</UserContext.Consumer>
				<Dialog
					actions={actions}
					open={this.state.open}
					onRequestClose={this.handleClose}
					contentStyle={styles.dialog}
				>
					<h2>Login</h2>
					<TextField
						type="email"
						floatingLabelText="Email"
						onChange={this.emailChange}
					/>{" "}
					<br />
					<TextField
						type="password"
						floatingLabelText="Password"
						onChange={this.passwordChange}
					/>
				</Dialog>
			</div>
		);
	}
}

const styles = {
	dialog: {
		width: "22%",
		height: "30%"
	}
};
