import React from "react";

import { ToolbarGroup, FloatingActionButton } from "material-ui";
import Face from "material-ui/svg-icons/action/face";

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
		<FloatingActionButton
			mini={true}
			style={styles.menuIcon}
			backgroundColor="#4E342E"
		>
			<Face />
		</FloatingActionButton>
	</ToolbarGroup>
);

const styles = {
	menuIcon: {
		padding: 2,
		margin: 2
	}
}
