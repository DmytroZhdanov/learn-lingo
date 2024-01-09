import { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicModalWindow from "../BasicModalWindow";
import Icon from "../Icon";
import LogInForm from "../LogInForm";
import RegistrationForm from "../RegistrationForm";
import { List, Button, RegButton } from "./index";

import { selectRefreshToken } from "../../../redux/auth/selectors";
import { initialState, setCredentials } from "../../../redux/auth/authSlice";

enum FORM {
  LOGIN = "login",
  REGISTER = "register",
}

type TForm = FORM.LOGIN | FORM.REGISTER | null;

type TAuthBarProps = {
  onMobMenuClose?: () => void;
};

const AuthBar: FC<TAuthBarProps> = ({ onMobMenuClose }): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form, setForm] = useState<TForm>(null);

  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);

  const handleLogInClick = (): void => {
    setForm(FORM.LOGIN);
    setIsModalOpen(true);
  };

  const handleRegistrationClick = (): void => {
    setForm(FORM.REGISTER);
    setIsModalOpen(true);
  };

  const handleLogOutClick = (): void => {
    dispatch(setCredentials(initialState));

    if (onMobMenuClose) {
      onMobMenuClose();
    }
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setForm(null);
  };

  return (
    <>
      <List>
        {!refreshToken ? (
          <>
            <li>
              <Button onClick={handleLogInClick}>
                <Icon iconId="log-in" />
                Log in
              </Button>
            </li>

            <li>
              <RegButton onClick={handleRegistrationClick}>Registration</RegButton>
            </li>
          </>
        ) : (
          <li>
            <Button onClick={handleLogOutClick}>
              <Icon iconId="log-out" />
              Log out
            </Button>
          </li>
        )}
      </List>

      <BasicModalWindow isShown={isModalOpen} onClose={handleCloseModal}>
        {form === FORM.LOGIN && (
          <LogInForm onMobMenuClose={onMobMenuClose} onModalClose={handleCloseModal} />
        )}
        {form === FORM.REGISTER && (
          <RegistrationForm onMobMenuClose={onMobMenuClose} onModalClose={handleCloseModal} />
        )}
      </BasicModalWindow>
    </>
  );
};

export default AuthBar;
