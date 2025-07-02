import Navbar from "@/components/shared/app/navbar"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-background text-foreground w-full flex flex-col">
            <Navbar />
            <div className="flex-1 w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout