import { FC, ReactElement } from "react";
import Button from "../Button";

const RegistrationForm: FC = (): ReactElement => {
  return (
    <div>
      <h2>Registration</h2>

      <p>
        Thank you for your interest in our platform! In order to register, we need some information.
        Please provide us with the following information
      </p>

      <form>
        <input type="text" />

        <input type="email" />

        <input type="password" />

        <Button padding="16px">Sign Up</Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
