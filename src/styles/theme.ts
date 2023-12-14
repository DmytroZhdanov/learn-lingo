type TThemeColor = {
  main: string;
  light: string;
};

type TColor = {
  yellow: TThemeColor;
  green: TThemeColor;
  blue: TThemeColor;
  pink: TThemeColor;
  orange: TThemeColor;
  black: string;
  grey: string;
  greenPrice: string;
  background: string;
};

export type TTheme = {
  color: TColor;
};

export const theme: TTheme = {
  color: {
    yellow: {
      main: "#F4C550",
      light: "#FBE9BA",
    },
    green: {
      main: "#9FBAAE",
      light: "#CBDED3",
    },
    blue: {
      main: "#9FB7CE",
      light: "#BFD6EA",
    },
    pink: {
      main: "#E0A39A",
      light: "#F2C0BD",
    },
    orange: {
      main: "#F0AA8D",
      light: "#F4C8BA",
    },
    black: "#121417",
    grey: "#8A8A89",
    greenPrice: "#38CD3E",
    background: "#F8F8F8",
  },
};
