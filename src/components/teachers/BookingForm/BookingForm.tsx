import { FC, ReactElement } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import Button from "components/common/Button";
import {
  ContainerDiv,
  Fieldset,
  Legend,
  RadioLabel,
  TextP,
  TitleH2,
  ErrorP,
  InputWrapperDiv,
  Img,
  TeacherDiv,
  TeacherSpan,
} from "components/common/Form.styled";
import { REASON, BookingValidationSchema } from "./index";

type TBookingFormProps = {
  teacherName: string;
  teacherAvatar: string;
};

type TFormValues = {
  reason: REASON.ABROAD | REASON.BUSINESS | REASON.CULTURE | REASON.EXAMS | REASON.KIDS | null;
  name: string;
  email: string;
  tel: string;
};

const BookingForm: FC<TBookingFormProps> = ({ teacherName, teacherAvatar }): ReactElement => {
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
    <ContainerDiv>
      <TitleH2>Book trial lesson</TitleH2>

      <TextP booking={true}>
        Our experienced tutor will assess your current language level, discuss your learning goals,
        and tailor the lesson to your specific needs.
      </TextP>

      <TeacherDiv>
        <Img src={teacherAvatar} alt={`${teacherName}'s avatar`} />

        <p>
          Your teacher <TeacherSpan>{teacherName}</TeacherSpan>
        </p>
      </TeacherDiv>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Fieldset>
              <Legend>What is your main reason for learning English?</Legend>

              <Field type="radio" name="reason" id="business" value={REASON.BUSINESS} />
              <RadioLabel htmlFor="business">Career and business</RadioLabel>

              <Field type="radio" name="reason" id="kids" value={REASON.KIDS} />
              <RadioLabel htmlFor="kids">Lesson for kids</RadioLabel>

              <Field type="radio" name="reason" id="abroad" value={REASON.ABROAD} />
              <RadioLabel htmlFor="abroad">Living abroad</RadioLabel>

              <Field type="radio" name="reason" id="exams" value={REASON.EXAMS} />
              <RadioLabel htmlFor="exams">Exams and coursework</RadioLabel>

              <Field type="radio" name="reason" id="culture" value={REASON.CULTURE} />
              <RadioLabel htmlFor="culture">Culture, travel or hobby</RadioLabel>
            </Fieldset>
            <ErrorMessage name="reason" component={ErrorP} />

            <InputWrapperDiv booking={true}>
              <Field type="text" id="name" name="name" placeholder="Full Name" />
              <ErrorMessage name="name" component={ErrorP} />
            </InputWrapperDiv>

            <InputWrapperDiv booking={true}>
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={ErrorP} />
            </InputWrapperDiv>

            <InputWrapperDiv booking={true}>
              <Field type="tel" id="tel" name="tel" placeholder="Phone number" />
              <ErrorMessage name="tel" component={ErrorP} />
            </InputWrapperDiv>

            <Button type="submit" padding="16px" disabled={!isValid || !dirty}>
              Book
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerDiv>
  );
};

export default BookingForm;
