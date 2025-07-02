import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import NotFoundPage from "./pages/notfound-page"
import AppLayout from "./layouts/app-layout"
import NotesDashboardPage from "./pages/notes-dashboard-page"
import CreateNotePage from "./pages/create-note-page"
import FavoritesPage from "./pages/favorites-page"
import ArchivedPage from "./pages/archived-page"
import TagsPage from "./pages/tags-page"
import { PlaygroundLayout } from "./layouts/playground-layout"
import EditorLayout from "./layouts/editor-layout"
import Editor from "./components/shared/playground/editor"
import NotesView from "./components/shared/playground/notes-view"
import SourcesPage from "./pages/playground/sources"
import AIChatPage from "./pages/playground/assistant"
import QuizPage from "./pages/playground/quiz/quiz-dashboard-page"
import QuizCreator from "./pages/playground/quiz/quiz-creator"
import QuizTaking from "./pages/playground/quiz/quiz-taking"
import QuizView from "./pages/playground/quiz/quiz-view"
import QuizResults from "./pages/playground/quiz/quiz-results"
import FlashcardDashboard from "./pages/playground/flashcard/flashcard-dashboard"
import FlashcardCreator from "./pages/playground/flashcard/flashcard-creator"
import FlashcardView from "./pages/playground/flashcard/flashcard-view"
import FlashcardStudy from "./pages/playground/flashcard/flashcard-study"
import MindMapDashboard from "./pages/playground/mindmap/mindmap-dashboard"
import DefaultPage from "./pages/default-page"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/playground" element={<PlaygroundLayout />}>
          {/* Default playground route */}
          <Route
            index
            element={<div className="w-full h-full flex items-center justify-center flex-1">Select a note to get started</div>}
          />

          <Route path=":noteId" element={<NotesView />} />

          <Route path=":noteId/subnotes/:subnoteId" element={<EditorLayout />}>
            <Route index element={<Editor />} />
          </Route>

          {/* Other note-specific routes */}
          <Route path=":noteId/sources" element={<SourcesPage />} />
          <Route path=":noteId/assistant" element={<AIChatPage />} />
          {/* Quiz routes */}
          <Route path=":noteId/quizzes" element={<QuizView />} />
          <Route path=":noteId/quizzes/new" element={<QuizCreator />} />
          <Route path=":noteId/quizzes/:quizId" element={<QuizTaking />} />
          <Route path=":noteId/quizzes/:quizId/results" element={<QuizResults />} />




          <Route path=":noteId/flashcards" element={<FlashcardView />} />
          <Route path=":noteId/flashcards/new" element={<FlashcardCreator />} />
          <Route path=":noteId/flashcards/:flashcardId" element={<FlashcardStudy />} />
          <Route path=":noteId/flashcards/:flashcardId/results" element={<FlashcardCreator />} />
          <Route path=":noteId/mindmaps" element={<MindMapDashboard />} />




          {/* Global playground routes */}
          <Route path="sources" element={<div className="p-4">All Sources</div>} />
          <Route path="assistant" element={<div className="p-4">Global Assistant</div>} />
          {/* Quizes routes */}
          <Route path="quizzes" element={<div className="p-4">All Quizzes</div>} />
          <Route path="quizzes/new" element={<div className="p-4">Create a new Quiz</div>} />
          <Route path="quizzes/:quizId/questions" element={<div className="p-4">Questions for this quiz</div>} />
        </Route>

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<DefaultPage />} />
          <Route path="notes" element={<NotesDashboardPage />} />
          <Route path="notes/new" element={<CreateNotePage />} />
          
          <Route path="chat" element={<div>PDF Chat</div>} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="archived" element={<ArchivedPage />} />
          <Route path="tags" element={<TagsPage />} />
          
          <Route path="quizzes" element={<QuizPage />} />
          <Route path="quizzes/new" element={<QuizCreator />} />
          <Route path="quizzes/:quizId" element={<QuizTaking />} />
          <Route path="quizzes/:quizId/results" element={<QuizResults />} />

          <Route path="flashcards" element={<FlashcardDashboard />} />
          <Route path="mindmaps" element={<MindMapDashboard />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
