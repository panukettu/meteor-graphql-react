import React from "react";

import { FloatingActionButton, TextField, Subheader, Paper } from "material-ui";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { List, ListItem, makeSelectable } from "material-ui/List";

import ActionInfo from "material-ui/svg-icons/action/info";
import DeleteDivision from "../../forms/DeleteDivision";
import SkillForm, { SkillList } from "../skills/Skills";
import Alarm from "material-ui/svg-icons/action/alarm";

export default class Divisions extends React.Component {

  render() {
    return (
      <div>
        {this.props.divisions.map(div => <div key={div._id}>{div.name}</div>)}
      </div>
    )
  }
}