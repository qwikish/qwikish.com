"use client"
import { useEffect, useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/editer-sidebar"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { useParams, useNavigate, Outlet, Link } from "react-router-dom"
import { BrainIcon, File, Library, Map, MessageCircleQuestion, Sparkle } from "lucide-react"
import { ThemeToggleSquare } from "@/components/mode-toggle"
// import { Dashboard } from "@/components/shared/playground"

export const Logo = () => {
    return (
        <a href="/app/notes" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium whitespace-pre text-primary text-2xl"
            >
                Qwikish 
            </motion.span>
        </a>
    )
}

export const LogoIcon = () => {
    return (
        <Link to="/notes/app" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
           <span className="font-medium whitespace-pre text-primary text-2xl">Q</span>
        </Link>
    )
}

export function PlaygroundLayout() {
    const { noteId } = useParams()
    const navigate = useNavigate()

    const editerLinks = [
        {
            title: "All Subnotes",
            href: `/playground/${noteId || ""}`,
            icon: <File />,
        },
        {
            title: "Sources",
            href: `/playground/${noteId || ""}/sources`,
            icon: <Library />,
        },
        {
            title: "Assistant",
            href: `/playground/${noteId || ""}/assistant`,
            icon: <Sparkle />,
        },
        {
            title: "Quizzes",
            href: `/playground/${noteId || ""}/quizzes`,
            icon: <MessageCircleQuestion />,
        },
        {
            title: "Flashcards",
            href: `/playground/${noteId || ""}/flashcards`,
            icon: <BrainIcon />,
        },
        {
            title: "Mind Maps",
            href: `/playground/${noteId || ""}/mindmaps`,
            icon: <Map />,
        },
    ]

    const [open, setOpen] = useState(false)

    // Auto-select first note if no noteId is present
    useEffect(() => {
        if (!noteId) {
            navigate("/notes")
        }
    }, [noteId, navigate])

    return (
        <div className={cn("flex w-full flex-1 flex-col overflow-hidden min-h-screen md:flex-row bg-background")}>
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between h-screen gap-10">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className={`mt-8 flex flex-col gap-2`}>
                            {editerLinks.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <ThemeToggleSquare />
                        </div>
                        <SidebarLink
                            link={{
                                title: "Shreya Raj Pandey",
                                href: "#",
                                icon: (
                                    <img
                                        src="/dummyUser.png"
                                        className="h-7 w-7 shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex flex-1 flex-col overflow-hidden"><Outlet /></div>
        </div>
    )
}
