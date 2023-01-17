/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0B0A07",

          secondary: "#FFFAFF",

          accent: "#1eb854",

          neutral: "#1fd65f",

          "base-100": "#d99330",

          info: "#3b343d",

          success: "#91FF00",

          warning: "#F8B359",

          error: "#F25464",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      }),
      keyframes: {
        popUp: {
          "0%": { transform: "scale(0)", opacity: "0%" },
          "100%": { transform: "scale(1)", opacity: "100%" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        keyframes: {
          slideIn: {
            "0%": { transform: "scale(0)", right: "0" },
            "100%": { transform: "scale(1)", right: "50%" },
          },
        },
      },
      animation: {
        ProjectPopUp: "popUp ease 0.3s linear",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 1s ease-in-out infinite alternate",
        rulesSlideIn: "slideIn 1s ease-in-out linear",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
