import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Input = styled.input(() => ({
  lineHeight: "1.5em",
  bordeRradius: 4,
  border: "1px solid #eeeeee",
  padding: "4px 6px",
  display: "block",
  width: "100%",
  boxSizing: "border-box",
}));

// const StyledButton = styled(Button)(() => ({
//   background: "#212121",
//   color: "#fff",
//   "&:hover": {
//     background: "#414042",
//   },
// }));

const ContactItemForm1 = () => {
  const validationShema = Yup.object().shape({
    name: Yup.string().typeError("Должно быть числом").required("Обязательно"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        secondName: "",
        password: "",
        confirmPassword: "",
        email: "",
        confirmEmail: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
      validationShema={validationShema}
    >
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
          <p>
            <label htmlFor="name">Имя</label>
            <br />
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </p>
          {touched.name && errors.name ? (
            <p className="errors">{errors.name}</p>
          ) : null}
          <button
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type="submit"
          >
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactItemForm1;
