type TThemeColor = {
  main: string;
  light: string;
};

type TIMacGradient = {
  yellow: string;
  green: string;
  blue: string;
  pink: string;
  orange: string;
};
type TAppleIconFill = {
  yellow: string;
  green: string;
  blue: string;
  pink: string;
  orange: string;
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
  iMacGradient: TIMacGradient;
  appleIconFill: TAppleIconFill;
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
    iMacGradient: {
      yellow: "linear-gradient(180deg, #EEB055 0%, #D08F38 100%)",
      green: "linear-gradient(180deg, #295761 0%, #183E49 100%)",
      blue: "linear-gradient(180deg, #314B6E 0%, #1F385A 100%)",
      pink: "linear-gradient(180deg, #B03F3E 0%, #982A27 100%)",
      orange: "linear-gradient(180deg, #E17650 0%, #CA5B38 100%)",
    },
    appleIconFill: {
      yellow: "linear-gradient(180deg, #FBE9BA 0%, #E7C885 100%)",
      green: "string",
      blue: "string",
      pink: "string",
      orange: "",
    },
  },
};
