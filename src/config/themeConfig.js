import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    button: {
      light: '#ECB390',
      dark: '#e59766',
    },
    table: {
      main: '94B49F',
    },
  },
  typography: {
    fontSize: 10,
    label: {
      fontSize: 16,
    },
  },
})

export default theme
