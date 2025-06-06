import type { ThemeOptions } from "@mui/material";
import { cssBaseline } from "./cssBaseline";
import React from "react";

const round = (value: number): number => Math.round(value * 1e5) / 1e5;
const pxToRem = (size: number): string => `${size / 16}rem`;
const buildVariant = (
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing?: number
) => ({
  fontFamily: "inherit",
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight: `${round(lineHeight / size)}`,
  ...(letterSpacing !== undefined ? { letterSpacing: `${round(letterSpacing / size)}em` } : {}),
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
    smm: true;
    xxl: true;
  }

  interface TypographyVariants {
    small: React.CSSProperties;
    big2: React.CSSProperties;
    extraSmall: React.CSSProperties;
    tiny: React.CSSProperties;
    big: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    small?: React.CSSProperties;
    big2: React.CSSProperties;
    extraSmall?: React.CSSProperties;
    tiny?: React.CSSProperties;
    big?: React.CSSProperties;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    score: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    score?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    subtitle1: true;
    subtitle2: true;
    caption: false;
    body1: true;
    body2: true;
    small: true;
    extraSmall: true;
    tiny: true;
    button: true;
    score: true;
    big: true;
    big2: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    active: true;
  }
}
export const getThemeConfig = (): ThemeOptions => {
  return {
    typography: {
      big: buildVariant(400, 80, 85),
      big2: buildVariant(700, 42, 54),
      h1: buildVariant(400, 39, 47.54),
      h2: buildVariant(600, 30, 36.75),
      h3: buildVariant(600, 24, 24),
      h4: buildVariant(600, 20, 24.38),
      h5: buildVariant(600, 18, 24),
      h6: buildVariant(700, 17, 20),
      body1: buildVariant(400, 16, 20),
      body2: buildVariant(400, 14, 20),
      small: buildVariant(400, 12, 15),
      extraSmall: buildVariant(400, 11, 16),
      score: buildVariant(700, 35, 45),
      tiny: buildVariant(400, 8, 9.75),
    },
    breakpoints: {
      keys: ["xs", "xsm", "sm", "md", "lg", "xl", "xxl"],
      values: {
        xs: 0,
        xsm: 480,
        sm: 600,
        smm: 840,
        md: 960,
        lg: 1280,
        xl: 1440,
        xxl: 1600,
      },
    },
    //color
    palette: {
      mode: "dark",

      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#97A8BC",
      },
      background: {
        default:
          "linear-gradient(90.17deg, rgba(7, 1, 88, 0.4) 0.13%, rgba(53, 0, 98, 0.4) 99.84%)",
        paper: "linear-gradient(90.17deg, rgba(7, 1, 88, 0.4) 0.13%, rgba(53, 0, 98, 0.4) 99.84%)",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#DC97FF",
      },
      divider: "#344456",
    },
    components: {
      MuiCssBaseline: cssBaseline,
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: "38px",
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            py: "12px",
            px: "16px",
          },
          containedPrimary: {
            backgroundColor: " #B172FF",
            color: "#F6F2FF",
            border: "none",
            ":hover": {
              backgroundColor: "#0179A5",
              color: "#FFFFFF",
            },
          },
          outlinedPrimary: {
            backgroundColor: "transparent",
            color: "#FFFFFF",
            border: "1px solid #BE95FF",
            ":hover": {
              color: "#FFFFFF",
              border: "1px solid #BE95FF",
            },
          },
          containedSecondary: {
            backgroundColor: " #632A9A80;",
            color: "#FFFFFF",
            border: "none",
            ":hover": {
              backgroundColor: "#1D384B",
              color: "#5185AA",
            },
          },
          outlinedSecondary: {
            backgroundColor: "transparent",
            color: "#009FDB",
            border: "1px sid #009FDB",
            ":hover": {
              backgroundColor: "#0179A5",
              color: "#FFFFFF",
              border: "1px sid #009FDB",
            },
          },
          outlinedInfo: {
            backgroundColor: " #632A9A80;",
            color: "#FFFFFF",
            border: "1px solid #009FDB",
            ":hover": {
              backgroundColor: "#12212C",
            },
          },
          textPrimary: {
            backgroundColor: "transparent",
            border: "none",
            color: "#5185AA",
            ":hover": {
              backgroundColor: "transparent",
              color: "#009FDB",
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: "14px",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            border: "none",
            color: "#E2EDFF",
            "& .MuiFormLabel-root": {
              color: "#6D8198",
            },
            "& .MuiInputBase-colorSecondary": {
              backgroundColor: "#0D1921",
              boxShadow: "0px 3px 4px 0px #071118 inset",
            },
            "& .MuiFormHelperText-root": {
              marginTop: "0px",
              marginBottom: "5px",
            },
            "& .MuiSelect-icon": {
              color: "#5185AA",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            backgroundColor: "#632A9A80",
            "& fieldset": {
              border: "none",
            },
            "&.Mui-error fieldset": {
              border: "1px solid #FF6767",
            },
            "& :-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px #030B10 inset !important",
            },
          },
          colorSecondary: {
            "& fieldset": {
              border: "none",
            },
            "&.MuiOutlinedInput-root": {
              backgroundColor: "#0D1921",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: "red",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#12212C",
            },
          },
        },
      },
    },
  };
};
