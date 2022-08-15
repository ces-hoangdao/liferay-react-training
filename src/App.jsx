import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import theme from './config/themeConfig'
import Home from './container/Home'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

export default App
