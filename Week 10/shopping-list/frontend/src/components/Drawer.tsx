import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";

export default function Drawer() {
  const navigate = useNavigate();
  const listItems = [
    { text: "Home", icon: <HomeIcon />, onClick: () => navigate("/") },
    {
      text: "Shopping List",
      icon: <ShoppingCartIcon />,
      onClick: () => navigate("/shoppinglist"),
    },
    { text: "Login", icon: <LoginIcon />, onClick: () => navigate("/login") },
    {
      text: "Register",
      icon: <AppRegistrationIcon />,
      onClick: () => navigate("/register"),
    },
  ];

  const secondListItem = [
    { text: "Logout", icon: <LogoutIcon />, onClick: () => navigate("/") },
  ];

  return (
    <MUIDrawer open variant="permanent">
      <List>
        {listItems.map((item) => (
          <ListItem key={item.text} disablePadding onClick={item.onClick}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem
          sx={{
            position: "fixed",
            bottom: 0,
          }}
          key={secondListItem[0].text}
          disablePadding
          onClick={secondListItem[0].onClick}
        >
          <ListItemButton>
            <ListItemIcon>{secondListItem[0].icon}</ListItemIcon>
            <ListItemText primary={secondListItem[0].text} />
          </ListItemButton>
        </ListItem>
      </List>
    </MUIDrawer>
  );
}
