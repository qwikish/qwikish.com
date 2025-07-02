import {  Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landing"
import AppLayout from "@/layouts/app-layout"
import Home from "./pages/home"
import { RoadmapsPage } from "./pages/app/roadmaps"
import { RoadmapDetailsPage } from "./pages/app/roadmap"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppLayout />} >
        {/* Unauthenticated/ Public Routes */ }
        <Route index element={<Home />} />
        <Route path="roadmaps" element={<RoadmapsPage />} />
        <Route path="roadmaps/:roadmapId" element={<RoadmapDetailsPage />} />
        <Route path="community" element={<h1>Single Topic</h1>} />
        <Route path="community/discussions" element={<h1>Single Topic</h1>} />
        <Route path="community/discussions/:discussionId" element={<h1>Single Topic</h1>} />
        <Route path="about" element={<h1>Single Topic</h1>} />
        <Route path="faq" element={<h1>Single Topic</h1>} />

        {/* Authenticated/ Private Routes */}
        <Route path="create-roadmap" element={<h1>Single Roadmap</h1>} />
        <Route path="my-roadmaps" element={<h1>Dashboard</h1>} />
        <Route path="my-roadmaps/started" element={<h1>Dashboard</h1>} />
        <Route path="my-roadmaps/completed" element={<h1>Dashboard</h1>} />
        <Route path="my-roadmaps/created" element={<h1>Single Roadmap</h1>} />
        <Route path="my-roadmaps/:roadmapId" element={<h1>Single Roadmap</h1>} />
      </Route>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App