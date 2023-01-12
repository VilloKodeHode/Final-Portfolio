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
    extend: {},
  },
  plugins: [require("daisyui")],
};
