import { useRoutes } from "react-router-dom"
import routes from "@/router"
import AppFooter from "./components/app-footer"
import { useScrollTop } from "./hooks"

function App() {
  useScrollTop()

  return (
    <>
      <div className="main">{useRoutes(routes)}</div>
      <AppFooter />
    </>
  )
}

export default App
