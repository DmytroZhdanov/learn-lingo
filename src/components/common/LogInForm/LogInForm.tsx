import { FC, ReactElement } from "react";
import Button from "../Button";

const LogInForm: FC = (): ReactElement => {
  return (
    <div>
      <h2>Log In</h2>

      <p>
        Welcome back! Please enter your credentials to access your account and continue your search
        for an teacher.
      </p>

      <form>
        <input type="email" />

        <input type="password" />

        <Button padding="16px">Log In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
