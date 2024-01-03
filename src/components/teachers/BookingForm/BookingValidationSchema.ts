import * as Yup from "yup";

export const BookingValidationSchema = Yup.object({
  reason: Yup.string()
    // .min(1, "You have to choose the reason")
    .required("You have to choose the reason"),
  name: Yup.string().required("Please, enter your name"),
  email: Yup.string()
    .matches(
      /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
      "Email address is not valid"
    )
    .required("Please, enter your email"),
  tel: Yup.number().required(),
});
