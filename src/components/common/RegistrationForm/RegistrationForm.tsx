import { FC, ReactElement } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../Button";
import {
  RegistrationValidationSchema,
  ContainerDiv,
  TitleH2,
  TextP,
  InputWrapperDiv,
} from "./index";

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
    <ContainerDiv>
      <TitleH2>Registration</TitleH2>

      <TextP>
        Thank you for your interest in our platform! In order to register, we need some information.
        Please provide us with the following information
      </TextP>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <InputWrapperDiv>
              <Field type="text" id="name" name="name" placeholder="Name" />

              <ErrorMessage name="name" />
            </InputWrapperDiv>

            <InputWrapperDiv>
              <Field type="email" id="email" name="email" placeholder="Email" />

              <ErrorMessage name="email" />
            </InputWrapperDiv>

            <InputWrapperDiv>
              <Field type="password" id="password" name="password" placeholder="Password" />

              <ErrorMessage name="password" />
            </InputWrapperDiv>

            <Button padding="16px" type="submit" disabled={!isValid || !dirty}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerDiv>
  );
};

export default RegistrationForm;
