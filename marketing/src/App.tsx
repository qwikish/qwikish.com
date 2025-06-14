import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import NotFoundPage from "./pages/notfound-page"

const LandingPage = lazy(() => import("./pages/landing"))


function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       




    </>
  )
}

export default App