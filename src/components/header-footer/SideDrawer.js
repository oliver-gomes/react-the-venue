import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("Featured")}>
          Event Starts In
        </ListItem>

        <ListItem button onClick={() => console.log("Featured")}>
          Venu Info
        </ListItem>

        <ListItem button onClick={() => console.log("Featured")}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => console.log("Featured")}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log("Featured")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
