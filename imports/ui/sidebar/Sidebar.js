import React from "react";

import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import Paper from "material-ui/Paper";
import Logout from './Logout';

export default Sidebar = ({client, user}) => (
    <Paper id="side-content" style={styles.sideContent}>
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
    </Paper>
)

const styles = {
  sideContent: {
    display: 'flex',
    flex: 0.15,
    flexDirection: 'column'
  }
}