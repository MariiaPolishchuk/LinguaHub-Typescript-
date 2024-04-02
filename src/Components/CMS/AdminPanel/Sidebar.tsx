import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "../../../styles/AdminBorder.css";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      className="cms-sidebar"
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {/* <ListItem button component={Link} to="/">
          <ListItemText className="back-link" primary="< Home Page" />
        </ListItem> */}
        <ListItem className="logo-cms" button component={Link} to="/">
          <img
            className="logo-icon"
            src="src/assets/images/IMG_9127.png"
          />
        </ListItem>

        <ListItem button component={Link} to="/admin-panel">
          <ListItemText primary="Add New Lesson" />
        </ListItem>

        <ListItem button component={Link} to="/admin-panel/my-lessons">
          <ListItemText primary="My Lessons" />
        </ListItem>
        <ListItem button component={Link} to="/admin-panel/edit">
          <ListItemText primary="Edit Existing Lessons" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
