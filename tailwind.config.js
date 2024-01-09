/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");

const theme1Colors = {
  FIORD: "#3A4764",
  EBONY_CLAY: "#232C43",
  MIRAGE: "#182034",
  LYNCH: "#637097",
  EAST_BAY: "#404E72",
  PERSIAN_RED: "#D03F2F",
  OLD_BRICK: "#93261A",
  PEARL_BUSH: "#EAE3DC",
  NAPA: "#B4A597",
  RIVER_BED: "#444B5A",
  WHITE: "#FFFFFF",
};

const theme2Colors = {
  MERCURY: "#E6E6E6",
  SWISS_COFFEE: "#D1CCCC",
  GALLERY: "#EDEDED",
  PARADISO: "#377F86",
  BLUMINE: "#1B5F65",
  BURNT_ORANGE: "#CA5502",
  PERU_TAN: "#893901",
  WESTAR: "#E5E4E1",
  ZORBA: "#A69D91",
  ARMADILLO: "#35352C",
  WHITE: "#FFFFFF",
};

const theme3Colors = {
  VIOLET: "#160628",
  VIOLET_L: "#1D0934",
  WINDSOR: "#58077D",
  ELECTRIC_VIOLET: "#BC15F4",
  ROBBIN_EGG_BLUE: "#00E0D1",
  AQUAMARINE: "#6CF9F2",
  GRAPE: "#341C4F",
  SEANCE: "#871C9C",
  BRIGHT_SUN: "#FFE53D",
  SHARK: "#1B2428",
  WHITE: "#FFFFFF",
};

const theme1 = {
  primary: theme1Colors.FIORD,
  "primary-dark": theme1Colors.EBONY_CLAY,
  "primary-darker": theme1Colors.MIRAGE,
  "primary-light": theme1Colors.LYNCH,
  "primary-lighter": theme1Colors.EAST_BAY,
  secondary: theme1Colors.PERSIAN_RED,
  "secondary-dark": theme1Colors.OLD_BRICK,
  ternary: theme1Colors.PEARL_BUSH,
  "ternary-dark": theme1Colors.NAPA,
  quaternary: theme1Colors.RIVER_BED,
  "quaternary-light": theme1Colors.WHITE,
};

const theme2 = {
  primary: theme2Colors.MERCURY,
  "primary-dark": theme2Colors.SWISS_COFFEE,
  "primary-darker": theme2Colors.GALLERY,
  "primary-light": theme2Colors.PARADISO,
  "primary-lighter": theme2Colors.BLUMINE,
  secondary: theme2Colors.BURNT_ORANGE,
  "secondary-dark": theme2Colors.PERU_TAN,
  ternary: theme2Colors.WESTAR,
  "ternary-dark": theme2Colors.ZORBA,
  quaternary: theme2Colors.ARMADILLO,
  "quaternary-light": theme2Colors.WHITE,
};

const theme3 = {
  primary: theme3Colors.VIOLET,
  "primary-dark": theme3Colors.VIOLET_L,
  "primary-darker": theme3Colors.VIOLET_L,
  "primary-light": theme3Colors.WINDSOR,
  "primary-lighter": theme3Colors.ELECTRIC_VIOLET,
  secondary: theme3Colors.AQUAMARINE,
  "secondary-dark": theme3Colors.ROBBIN_EGG_BLUE,
  ternary: theme3Colors.GRAPE,
  "ternary-dark": theme3Colors.SEANCE,
  quaternary: theme3Colors.BRIGHT_SUN,
  "quaternary-light": theme3Colors.WHITE,
};

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ["leagueSpartan"],
      },
    },
  },
  plugins: [
    createThemes({
      "theme-1": theme1,
      "theme-2": theme2,
      "theme-3": theme3,
    }),
  ],
};
