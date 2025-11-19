module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        mobile: "343px",
        tablet: "680px",
        desktop: "1200px",
      },
      spacing: {
        6: "24px",
        10: "40px",
        16: "64px",
        20: "80px",
        30: "120px",
      },
      colors: {
        midnight: "#0A0E1A",
        surface: "#1E293B",
        cyan: "#06B6D4",
        purple: "#5E00FF",
        primary: "#F1F5F9",
        secondary: "#94A3B8",
      }, 
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
