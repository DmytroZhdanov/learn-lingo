import { FC, ReactElement } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../Button";
import { LogInValidationSchema } from "./LogInValidationSchema";

type TFormValues = {
  email: string;
  password: string;
};

const LogInForm: FC = (): ReactElement => {
  const initialValues: TFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: TFormValues): void => {
    console.log(values);
  };

  return (
    <div>
      <h2>Log In</h2>

      <p>
        Welcome back! Please enter your credentials to access your account and continue your search
        for an teacher.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LogInValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />

            <Field type="password" id="password" name="password" />
            <ErrorMessage name="email" />

            <Button padding="16px" type="submit" disabled={!isValid || !dirty}>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogInForm;
