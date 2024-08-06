/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        nblue: "#0071eb",
        nred: "#e50914",
        ndark: "#232323",
        ndarkl: "#2d2d2d",
      },
      fontFamily: {
        martel: ['"Martel Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        youngSerif: ['"Young Serif"', "serif"],
      },
      backgroundImage: {
        "b-image":
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/43af842f-13d1-4986-bb16-10ba7e3c3de1/PK-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4d951114-b858-42cf-9ed4-fb06ad9ee502_small.jpg')",
      },
    },
  },
  plugins: [],
};
