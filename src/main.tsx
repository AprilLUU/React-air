import { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import "normalize.css"
import "@/assets/css/index.css"
import theme from "./assets/theme/theme"
import App from "@/App.tsx"
import store from "@/store/index.ts"
import Loading from "./components/loading"

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Suspense包裹在Provide外层时，redux不会监听异步加载的组件所派发的action???
  // <Provider store={store}>
  //   <Suspense fallback={<Loading />}>
  //     <ThemeProvider theme={theme}>
  //       <HashRouter>
  //         <App />
  //       </HashRouter>
  //     </ThemeProvider>
  //   </Suspense>
  // </Provider>

  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
)
