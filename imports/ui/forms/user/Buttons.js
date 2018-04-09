import React from "react";

import FloatingActionButton from "material-ui/FloatingActionButton";

import UserContext from "../../user-context";

export const NiceButton = (props) => (
	<FloatingActionButton
		mini={true}
		{...props }
	>{props.icon}
	</FloatingActionButton>
);

export const LoginButton = ({ handleOpen, style }) => (
	<FloatingActionButton
		mini={true}
		style={style}
		backgroundColor="#092301"
		onClick={this.login}
	>
		<AccountCircle />
	</FloatingActionButton>
);

export const LogoutButton = ({ style, client }) => {
	return (
		<FloatingActionButton
			mini={true}
			style={style}
			backgroundColor="#230101"
			onClick={this.logout}
		>
			<ExitToApp />
		</FloatingActionButton>
	);
};
