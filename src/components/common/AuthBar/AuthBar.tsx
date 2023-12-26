import { FC, ReactElement, useState } from "react";
import BasicModalWindow from "../BasicModalWindow";
import Icon from "../Icon";
import LogInForm from "../LogInForm";
import RegistrationForm from "../RegistrationForm";
import { List, Button, RegButton } from "./index";

enum FORM {
  LOGIN = "login",
  REGISTER = "register",
}

type TForm = FORM.LOGIN | FORM.REGISTER | null;

const AuthBar: FC = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form, setForm] = useState<TForm>(null);

  const handleLogInClick = (): void => {
    setForm(FORM.LOGIN);
    setIsModalOpen(true);
  };

  const handleRegistrationClick = (): void => {
    setForm(FORM.REGISTER);
    setIsModalOpen(true);
  };

  const handleLogOutClick = (): void => {};

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setForm(null);
  };

  return (
    <>
      <List>
        <li>
          <Button onClick={handleLogInClick}>
            <Icon iconId="log-in" />
            Log in
          </Button>
        </li>

        <li>
          <RegButton onClick={handleRegistrationClick}>Registration</RegButton>
        </li>

        <li>
          <Button onClick={handleLogOutClick}>
            <Icon iconId="log-out" />
            Log out
          </Button>
        </li>
      </List>

      <BasicModalWindow isShown={isModalOpen} onClose={handleCloseModal}>
        {form === FORM.LOGIN && <LogInForm />}
        {form === FORM.REGISTER && <RegistrationForm />}
      </BasicModalWindow>
    </>
  );
};

export default AuthBar;
