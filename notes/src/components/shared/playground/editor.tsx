"use client";

import {
    BlockNoteView
} from "@blocknote/mantine";
import { type Block } from "@blocknote/core";

import { useCreateBlockNote } from "@blocknote/react";
import type { PartialBlock } from "@blocknote/core";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { notes } from "@/constants/dummy-data";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css"
import "@blocknote/react/style.css";
import { useTheme } from "@/components/theme-provider";

export default function NotionStyleEditor() {
    const { noteId, subnoteId } = useParams();
    const { theme } = useTheme()
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    const currentNote = notes.find((note) => note.id === noteId);
    const currentSubnote = currentNote?.subnotes.find(
        (subnote) => subnote.id === subnoteId
    );

    const initialContent: PartialBlock[] = useMemo(() => {
        return [
            {
                type: "heading",
                props: { level: 1 },
                content: [
                    {
                        type: "text",
                        text: currentSubnote?.title || "Welcome to Qwikish Notes",
                        styles: {},
                    },
                ],
            },
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: currentSubnote?.content || "to add a description",
                        styles: {},
                    },
                ],
            },
        ];
    }, [currentSubnote?.content]);

    const editor = useCreateBlockNote(
        {
            initialContent,
        },
        [currentSubnote?.id]
    );

    const handleSave = async () => {
        if (!editor || !currentSubnote) return;
        setIsSaving(true);
        try {
            const blocks = editor.document as Block[];
            const content = blocks
                .map((block) => {
                    if (Array.isArray(block.content)) {
                        return block.content
                            .map((inline) =>
                                typeof inline === "object" && "text" in inline ? inline.text ?? "" : ""
                            )
                            .join("");
                    }
                    return "";
                })
                .filter(Boolean)
                .join("\n");
            console.log("Saving content:", content);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setLastSaved(new Date());
        } catch (error) {
            console.error("Failed to save:", error);
        } finally {
            setIsSaving(false);
        }
    };

    useEffect(() => {
        if (!editor) return;
        let timeoutId: NodeJS.Timeout;
        const handleChange = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => handleSave(), 2000);
        };
        editor.onEditorContentChange(handleChange);
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [editor]);

    if (!currentSubnote) {
        return (
            <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Subnote not found</h3>
                    <p className="text-sm">The requested subnote could not be found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col w-full">
            <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col min-h-0">
                <div className="flex-1">
                    <BlockNoteView
                        editor={editor}
                        theme={theme as "light" | "dark"}
                        className="h-full w-full overflow-auto"
                    />
                </div>
            </div>
        </div>
    );
}