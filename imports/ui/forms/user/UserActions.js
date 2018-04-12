import React from "react";

import { Dialog, TextField, RaisedButton } from "material-ui";
import AccountCircle from "material-ui/svg-icons/action/account-circle";
import ExitToApp from "material-ui/svg-icons/action/exit-to-app";

import { NiceButton } from "./Buttons";

export default class UserActions extends React.Component {
	state = {
		open: false
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	login = () => {
		Meteor.loginWithPassword(this.email, this.password, error => {
			if (!error) {
				this.props.client.resetStore();
				this.handleClose();
			}
		});
	};

	logout = () => {
		Meteor.logout();
		this.props.client.resetStore();
	};

	emailChange = (e, val) => {
		this.email = val;
	};

	passwordChange = (e, val) => {
		this.password = val;
	};

	render() {
		const { user } = this.props;

		const actions = [
			<RaisedButton
				type="submit"
				label="Login"
				primary={true}
				onClick={this.login}
			/>
		];

		return (
			<div>
				{user && user._id ? (
					<NiceButton
						backgroundColor="#230101"
						style={styles.logoutButton}
						onClick={this.logout.bind(this)}
						icon={<ExitToApp />}
					/>
				) : (
					<NiceButton
						backgroundColor="#01230c"
						style={styles.loginButton}
						onClick={this.handleOpen.bind(this)}
						icon={<AccountCircle />}
					/>
				)}
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
	},
	loginButton: {
		padding: 2,
		margin: 2
	},
	logoutButton: {
		padding: 2,
		margin: 2
	}
};
