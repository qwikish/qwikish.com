
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    FileX2,
    Upload,
    Trash2,
    Download,
    MoreHorizontal,
    Link2,
} from "lucide-react";
import { getFileIcon } from "@/utils/icons";
import { notes } from "@/constants/dummy-data";
import type { Source } from "@/types/notes";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";




const SourcesPage = () => {
    const { noteId } = useParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSources, setSelectedSources] = useState<string[]>([]);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

    const currentNote = notes.find(note => note.id === noteId);

    const filteredSources = currentNote?.sources?.map(source => source) || []

    const toggleSourceSelection = (id: string) => {
        setSelectedSources(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="max-w-7xl w-full mx-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">{noteId ? "Note Sources" : "All Sources"}</h1>
                    <p className="text-sm text-muted-foreground">
                        {filteredSources.length} sources found
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => navigate("/notes/new")}>Create Note</Button>
                    <Button
                        variant="outline"
                        onClick={() => document.getElementById("file-upload")?.click()}
                    >
                        <Upload className="w-4 h-4 mr-2" /> Upload
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            multiple
                            onChange={e => {
                                if (e.target.files) {
                                    setFilesToUpload(Array.from(e.target.files));
                                    setShowUploadModal(true);
                                }
                            }}
                        />
                    </Button>
                </div>
            </div>

            <Input
                placeholder="Search sources..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full"
            />

            {filteredSources.length === 0 ? (
                <div className="text-center py-12">
                    <FileX2 className="w-12 h-12 mx-auto text-muted-foreground" />
                    <h2 className="mt-4 text-lg font-semibold">No sources found</h2>
                    <p className="text-sm text-muted-foreground">Try another query or upload a file.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSources.map(source => (
                        <Card
                            key={source?.id}
                            className="border rounded-lg  hover:shadow-sm transition duration-300 hover:bg-primary/5"
                        >
                            <CardHeader className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        checked={selectedSources.includes(source?.id as string)}
                                        onCheckedChange={() => toggleSourceSelection(source?.id as string)}
                                    />
                                    {getFileIcon(source?.type as Source["type"])}
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <Download className="w-4 h-4 mr-2" /> Download
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link2 className="w-4 h-4 mr-2" />
                                            {source?.noteId ? "View Note" : "Link to Note"}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">
                                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </CardHeader>
                            <CardContent className="mt-4 space-y-1">
                                <h3 className="text-sm font-semibold line-clamp-2">{source?.name}</h3>
                                <p className="text-xs text-muted-foreground">{source?.size}</p>
                                {source?.noteTitle && (
                                    <Badge variant="outline">Linked to: {source?.noteTitle}</Badge>
                                )}
                                {source?.status === "pending" && (
                                    <Badge variant="secondary">Processing...</Badge>
                                )}
                            </CardContent>
                            <CardFooter>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Uploaded: {source?.uploadedAt.toLocaleDateString()}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}

            <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload Files</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                        {filesToUpload.map((file, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <p className="text-sm truncate">{file.name}</p>
                                <span className="text-xs text-muted-foreground">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </span>
                            </div>
                        ))}
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    console.log("Uploading files:", filesToUpload);
                                    setShowUploadModal(false);
                                    setFilesToUpload([]);
                                }}
                            >
                                Upload
                            </Button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SourcesPage;
