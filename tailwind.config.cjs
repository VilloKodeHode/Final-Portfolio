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
          "0%": { scale: "0%", opacity: "0%" },
          "100%": { scale: "100%", opacity: "100%" },
        },
      },
      animation: {
        ProjectPopUp: "popUp 0.3s linear",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
