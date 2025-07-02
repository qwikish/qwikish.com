// Route parameter types for type safety
export interface NoteRouteParams {
    noteId: string
}

export interface SubnoteRouteParams extends NoteRouteParams {
    subnoteId: string
}

export interface QuizRouteParams {
    quizId: string
}

export interface NoteQuizRouteParams extends NoteRouteParams {
    quizId: string
}

export interface FlashcardRouteParams {
    deckId: string
}

export interface MindMapRouteParams {
    mapId: string
}

export interface GroupRouteParams {
    groupId: string
}

export interface SourceRouteParams {
    sourceId: string
}

export interface CategoryRouteParams {
    category: string
}

// Route constants for consistent navigation
export const ROUTES = {
    // Main sections
    HOME: "/",
    PLAYGROUND: "/playground",
    NOTES: "/notes",
    QUIZZES: "/quizzes",
    STUDY: "/study",
    COMMUNITY: "/community",
    PROFILE: "/profile",
    ADMIN: "/admin",

    // Playground routes
    PLAYGROUND_QUIZZES: "/playground/quizzes",
    PLAYGROUND_FLASHCARDS: "/playground/flashcards",
    PLAYGROUND_MINDMAPS: "/playground/mindmaps",
    PLAYGROUND_SOURCES: "/playground/sources",
    PLAYGROUND_ASSISTANT: "/playground/assistant",

    // Note-specific routes
    NOTE_QUIZZES: (noteId: string) => `/playground/${noteId}/quizzes`,
    NOTE_FLASHCARDS: (noteId: string) => `/playground/${noteId}/flashcards`,
    NOTE_MINDMAPS: (noteId: string) => `/playground/${noteId}/mindmaps`,
    NOTE_SOURCES: (noteId: string) => `/playground/${noteId}/sources`,
    NOTE_ASSISTANT: (noteId: string) => `/playground/${noteId}/assistant`,

    // Quiz routes
    QUIZ_TAKE: (quizId: string) => `/playground/quizzes/${quizId}`,
    QUIZ_EDIT: (quizId: string) => `/playground/quizzes/${quizId}/edit`,
    QUIZ_RESULTS: (quizId: string) => `/playground/quizzes/${quizId}/results`,
    QUIZ_ANALYTICS: (quizId: string) => `/playground/quizzes/${quizId}/analytics`,

    // Note-specific quiz routes
    NOTE_QUIZ_TAKE: (noteId: string, quizId: string) => `/playground/${noteId}/quizzes/${quizId}`,
    NOTE_QUIZ_EDIT: (noteId: string, quizId: string) => `/playground/${noteId}/quizzes/${quizId}/edit`,
    NOTE_QUIZ_RESULTS: (noteId: string, quizId: string) => `/playground/${noteId}/quizzes/${quizId}/results`,
} as const
  