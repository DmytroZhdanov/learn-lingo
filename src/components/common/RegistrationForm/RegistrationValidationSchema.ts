import * as Yup from "yup";

export const RegistrationValidationSchema = Yup.object({
  name: Yup.string().required("Please, enter your name"),
  email: Yup.string()
    .matches(
      /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
      "Email address is not valid"
    )
    .required("Please, enter your email"),
  password: Yup.string()
    .min(6, "Your password must be at least 6 characters")
    .required("Your password must be at least 6 characters"),
});
