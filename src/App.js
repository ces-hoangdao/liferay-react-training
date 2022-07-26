import { Container, ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import ImportProduct from "./container"
import store from "./redux/store"
import theme from "./config/themeConfig"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImportProduct />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
