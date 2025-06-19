import * as React from "react"
import {
    BrainIcon,
    BriefcaseBusiness,
    Frame,
    GraduationCap,
    GroupIcon,
    Map,
    MessageCircleQuestion,
    Notebook,
    Route,
    SquareCheck,
} from "lucide-react"

import { NavUser } from "@/components/shared/dashboard/navuser"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"
// This is sample data.
// A indian girl name
const user = {
    name: "Shreya Raj Pandey",
    email: "shreya@qwikish.com",
    avatar: "/dummyUser.jpg",
}
const navMenu = [
    {
        title: "Dashboard",
        href: "/app",
        icon: Frame,
    },
    {
        title: "Study Hub",
        href: "/app/studyhub",
        icon: GraduationCap,
    },
    {
        title: "Notes",
        href: "/app/notes",
        icon: Notebook,
    },
    {
        title: "Tasks",
        href: "/app/tasks",
        icon: SquareCheck,
    },
    {
        title: "Quizzes",
        href: "/app/quizzes",
        icon: MessageCircleQuestion,
    }, {
        title: "Flashcards",
        href: "/app/flashcards",
        icon: BrainIcon,
    },
    {
        title: "Mind Maps",
        href: "/app/mindmaps",
        icon: Map,
    }, {
        title: "Roadmaps",
        href: "/app/roadmaps",
        icon: Route,
    }, {
        title: "Community",
        href: "/app/community",
        icon: GroupIcon,
    }, {
        title: "Jobs Board",
        href: "/app/jobs",
        icon: BriefcaseBusiness,
    }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open } = useSidebar()
    const { pathname } = useLocation()

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="justify-center flex w-full items-start p-4">
                {
                    open
                        ? (
                            <div className="flex items-center justify-center gap-2">
                                <h1 className="text-2xl font-bold text-primary">Qwikish</h1>
                            </div>
                        )
                        : (
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold text-primary">Q</h1>
                            </div>
                        )
                }
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarMenu>
                        {navMenu.map((item) => (
                            <SidebarMenuItem>
                                <Link to={item.href}>
                                    <SidebarMenuButton isActive={pathname === item.href}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar >
    )
}
