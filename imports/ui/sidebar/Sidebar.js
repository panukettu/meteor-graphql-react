import React from "react";

import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import Logout from './Logout';

export default Sidebar = ({client, user}) => (
  <div id="side-container" style={styles.sideContainer}>
    <AppBar title={user._id} showMenuIconButton={false}/>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
        <ListItem>Item 6</ListItem>
        <ListItem>Item 7</ListItem>
      </List> 
    <Logout client={client}/>
  </div>
)

const styles = {
  sideContainer: {
    display: "flex",
    flex: 0.15,
    flexDirection: "column",
    justifyContnet: "flex-end",
  }
}