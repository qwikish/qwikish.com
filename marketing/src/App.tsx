import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const LandingPage = lazy(() => import("./pages/landing"))


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App