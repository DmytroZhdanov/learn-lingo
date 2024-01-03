import { FC, ReactElement } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button";
import { RegistrationValidationSchema } from "./RegistrationValidationSchema";

type TFormValues = {
  name: string;
  email: string;
  password: string;
};

const RegistrationForm: FC = (): ReactElement => {
  const initialValues: TFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: TFormValues): void => {
    console.log(values);
  };

  return (
    <div>
      <h2>Registration</h2>

      <p>
        Thank you for your interest in our platform! In order to register, we need some information.
        Please provide us with the following information
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />

            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />

            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />

            <Button padding="16px" type="submit" disabled={!isValid || !dirty}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
