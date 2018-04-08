import React from "react";

import { ToolbarGroup, FloatingActionButton } from "material-ui";
import Face from "material-ui/svg-icons/action/face";

import LoginDialog from '../forms/user/LoginDialog';

export default Menu = () => (
	<ToolbarGroup>
		<FloatingActionButton mini={true} style={styles.menuIcon}>
			<Face />
		</FloatingActionButton>
		<FloatingActionButton
			mini={true}
			style={styles.menuIcon}
			backgroundColor="#000"
		>
			<Face />
		</FloatingActionButton>
		<LoginDialog style={styles.menuIcon}/>
	</ToolbarGroup>
);

const styles = {
	menuIcon: {
		padding: 2,
		margin: 2
	}
}
