import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/notfound-page";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./pages/dashboard";
import NotesPage from "./pages/notes";
import TasksDashboard from "./pages/tasks";
import QuizzesDashboard from "./pages/quizzes";
import FlashcardsDashboard from "./pages/flashcards";
import RoadmapPage from "./pages/roadmaps";
import CommunityDashboard from "./pages/community";
import MindMapsDashboard from "./pages/mindmaps";
import JobBoardDashboard from "./pages/job-board";
import StudyHubPage from "./pages/study-hub";
import ProfilePage from "./pages/profile-page";
import SettingsPage from "./pages/settings-page";
import BillingPage from "./pages/billing-page";
import AuthLayout from "./layouts/auth-layout";
import SignUpPage from "./pages/signup-page";
import SignInPage from "./pages/signin-page";
import OnboardingForm from "./pages/onboard-page";

const LandingPage = lazy(() => import("./pages/landing"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<SignUpPage />} />
          <Route path="login" element={<SignInPage />} />
        </Route>
        <Route path="/app/onboard" element={<OnboardingForm />} />
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="studyhub" element={<StudyHubPage />} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="tasks" element={<TasksDashboard />} />
          <Route path="quizzes" element={<QuizzesDashboard />} />
          <Route path="flashcards" element={<FlashcardsDashboard />} />
          <Route path="mindmaps" element={<MindMapsDashboard />} />
          <Route path="roadmaps" element={<RoadmapPage />} />
          <Route path="community" element={<CommunityDashboard />} />
          <Route path="jobs" element={<JobBoardDashboard />} />
          {/*Profile  */}
          <Route>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Settings */}
          <Route path="settings" element={<SettingsPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
