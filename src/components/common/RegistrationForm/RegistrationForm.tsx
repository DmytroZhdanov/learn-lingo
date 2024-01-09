import { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../Button";
import { RegistrationValidationSchema } from "./index";
import { ContainerDiv, TitleH2, TextP, InputWrapperDiv, ErrorP } from "../Form.styled";

import { useSignUpMutation } from "../../../redux/api";
import { setCredentials } from "../../../redux/auth/authSlice";

type TFormValues = {
  displayName: string;
  email: string;
  password: string;
};

type TRegistrationFormProps = {
  onMobMenuClose?: () => void;
  onModalClose: () => void;
};

const RegistrationForm: FC<TRegistrationFormProps> = ({
  onMobMenuClose,
  onModalClose,
}): ReactElement => {
  const dispatch = useDispatch();
  const [register, status] = useSignUpMutation();

  const initialValues: TFormValues = {
    displayName: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: TFormValues): Promise<void> => {
    const { displayName, email, refreshToken, idToken } = await register(values).unwrap();
    dispatch(setCredentials({ user: { displayName, email }, refreshToken, idToken }));

    onModalClose();

    if (onMobMenuClose) {
      onMobMenuClose();
    }
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
              <Field type="text" id="displayName" name="displayName" placeholder="Name" />

              <ErrorMessage name="displayName" component={ErrorP} />
            </InputWrapperDiv>

            <InputWrapperDiv>
              <Field type="email" id="email" name="email" placeholder="Email" />

              <ErrorMessage name="email" component={ErrorP} />
            </InputWrapperDiv>

            <InputWrapperDiv>
              <Field type="password" id="password" name="password" placeholder="Password" />

              <ErrorMessage name="password" component={ErrorP} />
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
