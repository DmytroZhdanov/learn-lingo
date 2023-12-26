import Button from "components/common/Button";
import { FC, ReactElement } from "react";

const BookingForm: FC = (): ReactElement => {
  return (
    <div>
      <h2>Book trial lesson</h2>

      <p>
        Our experienced tutor will assess your current language level, discuss your learning goals,
        and tailor the lesson to your specific needs.
      </p>

      <div></div>

      <form>
        <fieldset>
          <legend>What is your main reason for learning English?</legend>

          <input type="checkbox" id="business" name="business" />
          <label htmlFor="business">Career and business</label>

          <input type="checkbox" id="kids" name="kids" />
          <label htmlFor="kids">Lesson for kids</label>

          <input type="checkbox" id="abroad" name="abroad" />
          <label htmlFor="abroad">Living abroad</label>

          <input type="checkbox" id="exams" name="exams" />
          <label htmlFor="exams">Exams and coursework</label>

          <input type="checkbox" id="culture" name="culture" />
          <label htmlFor="culture">Culture, travel or hobby</label>
        </fieldset>

        <input type="text" />

        <input type="email" />

        <input type="tel" />

        <Button padding="16px">Book</Button>
      </form>
    </div>
  );
};

export default BookingForm;
