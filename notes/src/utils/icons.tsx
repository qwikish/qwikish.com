import { IconFileWord } from "@tabler/icons-react";
import { FileText, FileImage, FileSpreadsheet} from "lucide-react";

const getFileIcon = (type: string) => {
    switch (type) {
        case "pdf":
            return <FileText className="w-5 h-5 text-red-500" />;
        case "docx":
            return <IconFileWord className="w-5 h-5 text-blue-500" />;
        case "xlsx":
            return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
        case "image":
            return <FileImage className="w-5 h-5 text-purple-500" />;
        default:
            return <FileText className="w-5 h-5 text-gray-500" />;
    }
};

export { getFileIcon };