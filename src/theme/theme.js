const theme = {
  colors: {
    marlboroRed: "#C60000",
    darkGrey: "#141414",
    white: "#fff",
    black: "#000",
    lightGrey: "#C0C0C0",
    yellow: "#f7b32b",
    jetGrey: "#2D2D2D",
  },
  primary: {
    background: "#C60000",
    border: "none",
    cursor: "pointer",
    font: "2rem",
    fontWeight: "700",
    onHoverBackground: "#f7b32b",
    padding: "1.8rem 2rem",
    textTransform: "uppercase",
  },
  secondary: {
    background: "#141414",
    border: "2px solid #C60000",
    cursor: "pointer",
    font: "0.8rem",
    fontWeight: "400",
    padding: "0.8rem 1.6rem",
    onHoverBackground: "#C60000",
    textTransform: "capitalize",
  },
  disabled: {
    background: "#C0C0C0",
    border: "none",
    cursor: "auto",
    font: "1.8rem",
    onHoverBackground: "",
    padding: "1.2rem 2rem",
  },
  dark: {
    background: "#141414",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

export { theme };
