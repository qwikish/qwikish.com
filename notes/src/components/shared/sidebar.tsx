import * as React from "react"
import { Frame, MessageCircleQuestion, BrainIcon, Map, Route,  FileText, MessageSquare,  Star, Clock, Archive, Tag, Group } from 'lucide-react'

import { NavUser } from "@/components/shared/navuser"
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
} from "@/components/ui/shad-sidebar"
import { Link, useLocation } from "react-router-dom"
// This is sample data.
// A indian girl name
const user = {
    name: "Shreya Raj Pandey",
    email: "shreya@qwikish.com",
    avatar: "/dummyUser.jpg",
}
const notesNavMenu = [
    {
        title: "All Notes",
        href: "/app/notes",
        icon: FileText,
    },
    {
        title: "PDF Chat",
        href: "/app/chat",
        icon: MessageSquare,
    },
    {
        title: "Favorites",
        href: "/app/favorites",
        icon: Star,
    },
   {
        title: "Archived",
        href: "/app/archived",
        icon: Archive,
    },{
        title: "Tags",
        href: "/app/tags",
        icon: Tag,
    },{
        title: "Quizzes",
        href: "/app/quizzes",
        icon: MessageCircleQuestion,
    },{
        title: "Flashcards",
        href: "/app/flashcards",
        icon: BrainIcon,
    },
    {
        title: "Mind Maps",
        href: "/app/mindmaps",
        icon: Map,
    },
]
const otherNavMenu = [
    {
        title: "Roadmaps",
        href: "/app/roadmaps",
        icon: Route,
    },
    {
        title: "Tasks & Time Management",
        href: "/app/tasks",
        icon: Frame,
    },{
        title: "Pomodoro Timer",
        href: "/app/pomodoro",
        icon: Clock,
    }   ,{
        title:"Community",
        href:"/app/community",
        icon: Group
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
                                <h1 className="text-2xl font-bold text-primary">Qwikish <span className="text-muted-foreground text-sm">Notes</span></h1>
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
                    <SidebarGroupLabel>Notes Platform</SidebarGroupLabel>
                    <SidebarMenu>
                        {notesNavMenu.map((item) => (
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
                <SidebarGroup>
                    <SidebarGroupLabel>Other</SidebarGroupLabel>
                    <SidebarMenu>
                        {otherNavMenu.map((item) => (
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
