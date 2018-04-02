import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
	cyan500,
	cyan700,
	pinkA200,
	grey100,
	grey300,
	grey400,
	grey500,
	grey800,
	grey900,
	white,
	darkBlack,
	fullBlack
} from "material-ui/styles/colors";

import {
	Toolbar,
	Paper,
	ToolbarTitle,
	ToolbarGroup,
	FloatingActionButton
} from "material-ui";

import { Tabs, Tab } from "material-ui/Tabs";
import Face from "material-ui/svg-icons/action/face";
import CircularProgress from "material-ui/CircularProgress";

import DivisionForm from "../forms/DivisionForm";
import Content from "../content/Content";

const divisions = gql`
	query divisions {
		divisions {
			_id
			name
		}
	}
`;

const Layout = ({ data }) => (
	<div id="container" style={styles.container}>
		<div id="top-container" style={styles.topContainer} />
		<Toolbar>
			<ToolbarTitle />
			<ToolbarGroup>
				<FloatingActionButton mini="true" style={styles.menuIcon}>
					<Face />
				</FloatingActionButton>
				<FloatingActionButton
					mini="true"
					style={styles.menuIcon}
					backgroundColor="#000"
				>
					<Face />
				</FloatingActionButton>
				<FloatingActionButton
					mini="true"
					style={styles.menuIcon}
					backgroundColor="#4E342E"
				>
					<Face />
				</FloatingActionButton>
			</ToolbarGroup>
		</Toolbar>
		<div id="bottom-container" style={styles.bottomContainer}>
			{data.loading ? (
				<CircularProgress />
			) : (
				<DivisionForm divisions={data.divisions} /> 
			)}
		</div>
	</div>
);

export default graphql(divisions, {
	props: ({ data }) => ({ data })
})(Layout);

const styles = {
	container: {
		display: "flex",
		flex: 1,
		flexDirection: "column"
	},
	topContainer: {
		display: "flex",
		flex: 1,
		flexDirection: "row",
		backgroundColor: grey900
	},
	appBar: {
		backgroundColor: grey800
	},
	bottomContainer: {
		display: "flex",
		flex: 2,
		flexDirection: "row",
		justifyContent: "flex-start"
	},
	menuIcon: {
		padding: 2,
		margin: 2
	}
};
