import { Home, SuccessfulPage } from "../pages/index"

const APP_PATHS = {
  home: "/",
  success: "/success",
}

const ROUTES = [
  { path: APP_PATHS.home, element: <Home /> },
  { path: APP_PATHS.success, element: <SuccessfulPage /> },
]
export { ROUTES, APP_PATHS }
