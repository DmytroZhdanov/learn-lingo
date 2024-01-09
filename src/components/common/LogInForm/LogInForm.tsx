import { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../Button";
import { LogInValidationSchema } from "./index";
import { ContainerDiv, TextP, TitleH2, InputWrapperDiv, ErrorP } from "../Form.styled";

import { useSignInMutation } from "../../../redux/api";
import { setCredentials } from "../../../redux/auth/authSlice";

type TFormValues = {
  email: string;
  password: string;
};

type TLogInFormProps = {
  onMobMenuClose?: () => void;
  onModalClose: () => void;
};

const LogInForm: FC<TLogInFormProps> = ({ onMobMenuClose, onModalClose }): ReactElement => {
  const dispatch = useDispatch();
  const [login, status] = useSignInMutation();

  const initialValues: TFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: TFormValues): Promise<void> => {
    const { displayName, email, refreshToken, idToken } = await login(values).unwrap();
    dispatch(setCredentials({ user: { displayName, email }, refreshToken, idToken }));

    onModalClose();

    if (onMobMenuClose) {
      onMobMenuClose();
    }
  };

  return (
    <ContainerDiv>
      <TitleH2>Log In</TitleH2>

      <TextP>
        Welcome back! Please enter your credentials to access your account and continue your search
        for a teacher.
      </TextP>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LogInValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <InputWrapperDiv>
              <Field type="email" id="email" name="email" placeholder="Email" />

              <ErrorMessage name="email" component={ErrorP} />
            </InputWrapperDiv>

            <InputWrapperDiv>
              <Field type="password" id="password" name="password" placeholder="Password" />

              <ErrorMessage name="password" component={ErrorP} />
            </InputWrapperDiv>

            <Button padding="16px" type="submit" disabled={!isValid || !dirty}>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerDiv>
  );
};

export default LogInForm;
