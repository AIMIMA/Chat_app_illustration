/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      grad: {
        100: "rgb(233 66 255 / 10%)",
        200: "rgb(105 144 206 / 10%)",
        500: "hsl(293, 100%, 63%)",
        900: "hsl(264, 100%, 61%)",
      },
      appBg: "hsl(270, 20%, 96%)",
      subBg: "hsl(271, 36%, 24%)",
      radOut: "hsl(289, 100%, 72%)",
      mainH: "hsl(271, 36%, 24%)",
      para: "hsl(270, 7%, 64%)",
      chatL: "hsl(276, 55%, 52%)",
      chatR: "hsl(271, 15%, 43%)",
      placeH: "hsl(206, 6%, 79%)",
      subHead: "hsl(276, 100%, 81%)",
    },
    boxShadow: {
      main: "0px 8px 35px 15px #ddd",
    },
  },
};
export const plugins = [];
