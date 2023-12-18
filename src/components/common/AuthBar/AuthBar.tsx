import { FC, ReactElement } from "react";
import Icon from "../Icon";
import { List, Button, RegButton } from "./index";

const AuthBar: FC = (): ReactElement => {
  return (
    <List>
      <li>
        <Button>
          <Icon iconId="log-in" />
          Log in
        </Button>
      </li>

      <li>
        <RegButton>Registration</RegButton>
      </li>

      <li>
        <Button>
          <Icon iconId="log-out" />
          Log out
        </Button>
      </li>
    </List>
  );
};

export default AuthBar;
