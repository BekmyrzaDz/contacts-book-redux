import React from "react";
import logo from "../images/Group.svg";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton>
            <img src={logo} alt=""></img>
          </IconButton>
          <Typography
            variant="h6"
            component="span"
            style={{ fontFamily: "Ubuntu", fontWeight: 400, fontSize: 32 }}
          >
            MyContacts
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
