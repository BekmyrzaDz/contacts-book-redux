import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import styled from "@mui/material/styles";
// import styled from "styled-components";
import avatar from "../../images/avatar.jpg";
import favorite from "../../images/favorite-heart.svg";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ContactItemForm from "./ContactItemForm";
import ContactItemForm1 from "./ContactItemForm1";

// const Input = styled(() => (
//   lineheight: "1.5em",
//   borderradius: 4,
//   border: "1px solid #eeeeee",
//   padding: "4px 6px",
//   display: "block",
//   width: "100%",
//   boxsizing: "border-box",
// ));

const ContactItem = () => {
  return (
    <Container>
      <Box
        sx={{ display: "flex", alignItems: "center", padding: "41px 0 41px" }}
      >
        <img src={avatar} alt="avatar" />
        <IconButton sx={{ width: 70, height: 64.4, marginLeft: "26px" }}>
          <img src={favorite} alt="favorite" style={{ width: "100%" }} />
        </IconButton>
      </Box>
      <ContactItemForm />
    </Container>
  );
};

export default ContactItem;
