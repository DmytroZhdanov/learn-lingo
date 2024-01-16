import { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Button from "../Button";
import Loader from "../Loader";
import { RegistrationValidationSchema } from "./index";
import { ContainerDiv, TitleH2, TextP, InputWrapperDiv, ErrorP } from "../Form.styled";

import { IError, useSignUpMutation } from "../../../redux/api";
import { setCredentials } from "../../../redux/auth/authSlice";
import { AppDispatch } from "../../../redux/store";

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
  const dispatch: AppDispatch = useDispatch();
  const [register, { isLoading, isError, error }] = useSignUpMutation();

  const initialValues: TFormValues = {
    displayName: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    if (isError) {
      const err = error as IError;
      Notify.failure(err.data.error.message);
    }
  }, [isError]);

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

      {isLoading && <Loader />}
    </ContainerDiv>
  );
};

export default RegistrationForm;
