import { Button } from "@material-ui/core";
import React from "react";
import { Form, Formik } from "formik";
import FormikTextField from "../formik/FormikTextField";

const Login = () => {
  return (
    <Formik>
      <Form>
        <FormikTextField />
        <FormikTextField />
        <Button></Button>
      </Form>
    </Formik>
  );
};
export default Login;
