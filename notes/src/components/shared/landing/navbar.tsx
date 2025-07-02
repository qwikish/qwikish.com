"use client";
import { useState } from "react";
import {Link} from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    FileTextIcon,
    MessageSquareIcon,
    BookOpenIcon,
    FileSearchIcon,
    BrainIcon,
    Menu,
    X,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
    {
        name: "Features",
        subItems: [
            { name: "PDF Chat", icon: <MessageSquareIcon className="w-4 h-4" />, to: "#chat" },
            { name: "Document Library", icon: <BookOpenIcon className="w-4 h-4" />, to: "#library" },
            { name: "Smart Search", icon: <FileSearchIcon className="w-4 h-4" />, to: "#search" },
            { name: "Knowledge Base", icon: <BrainIcon className="w-4 h-4" />, to: "#knowledge" }
        ]
    },
    { name: "How It Works", to: "#how-it-works" },
    { name: "Testimonials", to: "#testimonials" },
    { name: "Pricing", to: "#pricing" }
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container flex mx-auto items-center justify-between h-16 px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-semibold">
                    <FileTextIcon className="w-6 h-6 text-primary" />
                    <span className="text-lg">DocuChat</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.subItems ? (
                                <>
                                    <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                                        {item.name}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-4 h-4"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-lg bg-background shadow-lg ring-1 ring-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="p-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.to}
                                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                                                >
                                                    {subItem.icon}
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={item.to}
                                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <Link to="/login">
                        <Button variant="ghost" size="sm">
                            Sign In
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-2 pb-6 pt-2">
                                    <FileTextIcon className="w-6 h-6 text-primary" />
                                    <span className="text-lg font-semibold">DocuChat</span>
                                </div>

                                <div className="flex-1 overflow-y-auto">
                                    <div className="space-y-4">
                                        {navItems.map((item) => (
                                            <div key={item.name} className="space-y-2">
                                                {item.subItems ? (
                                                    <>
                                                        <div className="text-sm font-medium px-2 py-1.5 text-foreground/80">
                                                            {item.name}
                                                        </div>
                                                        <div className="space-y-1 pl-4">
                                                            {item.subItems.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    to={subItem.to}
                                                                    className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md text-foreground/70 hover:bg-accent hover:text-foreground transition-colors"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {subItem.icon}
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={item.to}
                                                        className="block px-2 py-1.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t">
                                    <div className="flex flex-col gap-2">
                                        <Link to="/login">
                                            <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}