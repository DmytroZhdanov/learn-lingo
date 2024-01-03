import { FC, ReactElement } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import Button from "components/common/Button";
import { REASON, BookingValidationSchema } from "./index";

type TFormValues = {
  reason: REASON.ABROAD | REASON.BUSINESS | REASON.CULTURE | REASON.EXAMS | REASON.KIDS | null;
  name: string;
  email: string;
  tel: string;
};

const BookingForm: FC = (): ReactElement => {
  const initialValues: TFormValues = {
    reason: null,
    name: "",
    email: "",
    tel: "",
  };

  const handleSubmit = (values: TFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <h2>Book trial lesson</h2>

      <p>
        Our experienced tutor will assess your current language level, discuss your learning goals,
        and tailor the lesson to your specific needs.
      </p>

      <div></div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <fieldset>
              <legend>What is your main reason for learning English?</legend>

              <Field type="radio" name="reason" id="business" value="business" />
              <label htmlFor="business">Career and business</label>

              <Field type="radio" name="reason" id="kids" value="kids" />
              <label htmlFor="kids">Lesson for kids</label>

              <Field type="radio" name="reason" id="abroad" value="abroad" />
              <label htmlFor="abroad">Living abroad</label>

              <Field type="radio" name="reason" id="exams" value="exams" />
              <label htmlFor="exams">Exams and coursework</label>

              <Field type="radio" name="reason" id="culture" value="culture" />
              <label htmlFor="culture">Culture, travel or hobby</label>
            </fieldset>
            <ErrorMessage name="reason" />

            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />

            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />

            <Field type="tel" id="tel" name="tel" />
            <ErrorMessage name="tel" />

            <Button type="submit" padding="16px" disabled={!isValid || !dirty}>
              Book
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
