import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Face from "material-ui/svg-icons/action/face";

export const LoginButton = ({handleOpen, style}) => (
	<FloatingActionButton
		mini={true}
		style={style}
		backgroundColor="#4E342E"
		onClick={handleOpen}
	>
		<Face />
	</FloatingActionButton>
);

export const LogoutButton = () => {
  logout = () => {
    Meteor.logout();
  }

	return (<FloatingActionButton
		mini={true}
    backgroundColor="#4E342E"
    onClick={this.logout}
	>
		Hei
	</FloatingActionButton>);
}