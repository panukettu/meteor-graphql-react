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

import { Toolbar, Paper, ToolbarTitle, ToolbarGroup } from "material-ui";

import { Tabs, Tab } from "material-ui/Tabs";
import CircularProgress from "material-ui/CircularProgress";

import Content from "../content/Content";
import DivisionForm from "../forms/division/DivisionForm";
import Menu from "../menu/Menu.js";

import Divisions from "../content/divisions/Divisions";

import UserContext from "../user-context";

const divisions = gql`
	query divisions {
		divisions {
			_id
			name
			skills {
				_id
				name
				info
				level
				url
				completed
			}
		}
	}
`;

const Layout = ({ data }) => (
	<div id="container" style={styles.container}>
		<div id="top-container" style={styles.topContainer}>
			{data.loading ? (
				<CircularProgress />
			) : (
				<div style={{ flex: 1, display: "flex", flexWrap: "no-wrap" }}>
					<div style={{flex: 1, display: "flex", flexWrap: "wrap"}}>
              Other content
					</div>
					<div style={{flex: 1, display: "flex", flexWrap: "wrap"}}>	
						<Divisions divisions={data.divisions} />
					</div>
				</div>
			)}
		</div>
		<Toolbar>
			<ToolbarTitle />
			<ToolbarGroup>
				<Menu />
			</ToolbarGroup>
		</Toolbar>
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
	appBar: {
		backgroundColor: grey800
	},
	topContainer: {
		display: "flex",
		flex: 3,
		flexDirection: "row",
		justifyContent: "flex-start",
		backgroundColor: grey900
	}
};
