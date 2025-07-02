"use client"

import { useParams } from "react-router-dom"
import type {
    NoteRouteParams,
    SubnoteRouteParams,
    QuizRouteParams,
    NoteQuizRouteParams,
    FlashcardRouteParams,
    MindMapRouteParams,
    GroupRouteParams,
    SourceRouteParams,
    CategoryRouteParams,
} from "../types/routes"

// Custom hooks for type-safe route parameters
export const useNoteParams = () => {
    return useParams<NoteRouteParams>()
}

export const useSubnoteParams = () => {
    return useParams<SubnoteRouteParams>()
}

export const useQuizParams = () => {
    return useParams<QuizRouteParams>()
}

export const useNoteQuizParams = () => {
    return useParams<NoteQuizRouteParams>()
}

export const useFlashcardParams = () => {
    return useParams<FlashcardRouteParams>()
}

export const useMindMapParams = () => {
    return useParams<MindMapRouteParams>()
}

export const useGroupParams = () => {
    return useParams<GroupRouteParams>()
}

export const useSourceParams = () => {
    return useParams<SourceRouteParams>()
}

export const useCategoryParams = () => {
    return useParams<CategoryRouteParams>()
}
