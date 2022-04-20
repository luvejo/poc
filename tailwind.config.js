module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],

  theme: {
    colors: {
      // Primary
      p: {
        500: "#FDBD00",
      },

      // Secondary
      s: {
        300: "#E7E8F0",
      },
    },

    extend: {
      spacing: {
        "1/2": "50%",
      },
    },
  },
};
