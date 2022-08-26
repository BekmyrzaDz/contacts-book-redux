import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Box, Button } from "@mui/material";
import styled from "styled-components";

const BoxElem = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  // alignItems: "center",
  marginBottom: 27,
  label: {
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontWeight: 400,
    color: "rgba(33, 33, 33, 0.75)",
  },
}));
const Input = styled.input(() => ({
  padding: "10px 0 10px 8px",
  width: 289,
  background: "#FFFFFF",
  border: "1px solid rgba(33, 33, 33, 0.35)",
  borderRadius: "2px",
  fontFamily: "Ubuntu",
  fontSize: 16,
  fontWeight: 400,
  "::placeholder": {},
}));
// const Input = styled.input`
//   padding: "10px 0 10px 8px";
//   width: "289px";
//   background: "#FFFFFF";
//   border: "1px solid rgba(33, 33, 33, 0.35)";
//   border-radius: "2px";
//   font-family: "Ubuntu";
//   font-size: 16;
//   font-weight: 400;
// `;

const StyledButton = styled(Button)(() => ({
  background: "#212121",
  color: "#fff",
  "&:hover": {
    background: "#414042",
  },
}));

const ContactItemForm = () => {
  return (
    <Formik>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <Form className="form">
          <Box sx={{ width: 621 }}>
            <BoxElem>
              <p>
                <label htmlFor="firstName">First name:</label>
                <br />
                <Input name="firstName" />
              </p>
              <p>
                <label htmlFor="lastName">Last name:</label>
                <br />
                <Input name="lastName" />
              </p>
            </BoxElem>
            <BoxElem>
              <p>
                <label htmlFor="city">City:</label>
                <br />
                <Input name="city" />
              </p>
              <p>
                <label htmlFor="country">Country:</label>
                <br />
                <Input name="country" />
              </p>
            </BoxElem>
            <BoxElem>
              <p>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <br />
                <Input name="phoneNumber" />
              </p>
              <p>
                <label htmlFor="email">Email:</label>
                <br />
                <Input name="email" />
              </p>
            </BoxElem>
            <BoxElem>
              <p>
                <label htmlFor="website">Website:</label>
                <br />
                <Input name="website" />
              </p>
              <Box>
                <Button
                  sx={{
                    background: "#212121",
                    color: "#fff",
                    width: "289px",
                    padding: "7px 0 6px 8px",
                    fontSize: 16,
                    fontWeight: 400,
                    marginTop: "19px",
                    "&:hover": {
                      background: "#414042",
                    },
                  }}
                >
                  Save Contact
                </Button>
              </Box>
            </BoxElem>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactItemForm;
