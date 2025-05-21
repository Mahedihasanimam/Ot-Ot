const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "400px",
      lg: "880px",
      tablet: "1024px",
    },
    extend: {
      fontFamily: {
        // Roboto
        RoboNormal: "Roboto-Regular",
        RoboMedium: "Roboto-Medium",
        RoboBold: "Roboto-Bold",
      },

      colors: {
        primary: "#007BFF",
        title: "#272727",
        subT: "#5e5e5e",
        offWhite: "#E6ECEC",
        secondary: "#F4FAFA",
        white100: "#EFEFEF",
        border: "#DFDFDF",
        primary100: "#EEF6F6",
        primary200: "#9BB3B5",
        danger: "#CE3535",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".btn": {
          padding: 3,
          borderRadius: 10,
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        ".resize-repeat": {
          resizeMode: `repeat`,
        },
      });
    }),
  ],
};
