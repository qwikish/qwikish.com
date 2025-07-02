export type Subnote = {
    id: string;
    title: string;
    content: string;
    starred: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type Source = {
    id: string;
    name: string;
    type: "pdf" | "docx" | "xlsx" | "image" | "other";
    size: string;
    uploadedAt: Date;
    noteId: string | null;
    noteTitle: string | null;
    status: "pending" | "processed";
};

export type Note = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    starred: boolean;
    category: string;
    subnotes: Subnote[];
    sources?: Source[];
};
