import { Container, ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import theme from "./config/themeConfig"
import store from "./redux/store"
import { ROUTES } from "./constants/routeConstants"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Router>
            <Routes>
              {ROUTES.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
