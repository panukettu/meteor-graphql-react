import React from "react";

import { ToolbarGroup, FloatingActionButton } from "material-ui";
import Face from "material-ui/svg-icons/action/face";

import UserActions from '../forms/user/UserActions';
import UserContext from "../user-context";

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
    <UserContext.Consumer>
		  {(context) => <UserActions {...context}/>}
    </UserContext.Consumer>
	</ToolbarGroup>
);

const styles = {
	menuIcon: {
		padding: 2,
		margin: 2
	}
}
