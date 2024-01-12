import { FC, ReactElement } from "react";
import { ThreeDots } from "react-loader-spinner";
import { theme } from "styles";

import { Backdrop, Container } from "./index";

const Loader: FC = (): ReactElement => {
  return (
    <Backdrop>
      <Container>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={theme.color.yellow.main}
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </Container>
    </Backdrop>
  );
};

export default Loader;
