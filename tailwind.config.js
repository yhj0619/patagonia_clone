module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
    },
    extend: {
      colors: {
        sb: {
          50: "#f2fafc",
          100: "#e4f3f7",
          200: "#c0e3ed",
          300: "#9fd1e3",
          400: "#61aacf",
          500: "#2c83ba",
          600: "#2572a8",
          700: "#19578c",
          800: "#104070",
          900: "#092b54",
          950: "#041836",
        },
        cb: {
          50: "#9D848E",
          100: "#884332",
          200: "#C3C2C3",
          300: "#B93A32",
          400: "#283243",
          500: "#3E493B",
          600: "#F2CC97",
          700: "#434135",
          800: "#928679",
          900: "#7B5427",
          950: "#041836",
          1000: "#EF4923",
        },
      },
      theme: {
        extend: {
          strokeWidth: {
            3: "3",
            4: "4",
            7: "7",
            // 필요한 굵기 추가
          },
        },
      },
    },
  },
  plugins: [],
};
