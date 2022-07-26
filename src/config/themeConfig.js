import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    button: {
      primary: {
        light: "#ffcb55",
        dark: "#ffb30e",
      },
      secondary: {
        dark: "#7d7e85",
      },
    },
  },
  typography: {
    fontFamily: `"Roboto","Barlow"`,
    label: {
      fontSize: 20,
    },
  },
})

export default theme
