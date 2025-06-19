import { useEffect, useState } from "react";
import { ThemeToggleSquare } from "@/components/mode-toggle";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { _hero_nav_items, _hero_nav_resources } from "@/constants";
import { Button } from "@/components/ui/button";
import { GithubIcon, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "backdrop-blur-md bg-background/90 border-b shadow-sm"
                    : "bg-background/80"
                }`}
        >
            <div className="flex items-center justify-between w-full p-3 px-4 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className="text-lg font-bold text-primary/70 cursor-not-allowed">
                        Qwikish.com
                    </div>
                </div>

                {/* Desktop Navigation Menu */}
                <nav className="hidden md:flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* Features Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 text-foreground/70">
                                    Features
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-lg shadow-lg border">
                                    <div className="grid grid-cols-2 gap-4 p-4 w-[600px]">
                                        {_hero_nav_items.map((item, index) => (
                                            <FeatureCard
                                                key={index}
                                                title={item.title}
                                                icon={<item.icon className="w-5 h-5 text-primary/70" />}
                                                description={item.discription}
                                                to={item.href}
                                            />
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* About Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 text-foreground/70">
                                    About
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-lg shadow-lg border">
                                    <div className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-2">
                                        <NavigationMenuLink className="row-span-3" asChild>
                                            <div
                                                className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md bg-accent/30"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium text-foreground/70">
                                                    Qwikish.com
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground/70">
                                                    Qwikish.com is a one stop solution for students to
                                                    learn, organize and share their knowledge.
                                                </p>
                                            </div>
                                        </NavigationMenuLink>
                                        {_hero_nav_resources.map((item, index) => (
                                            <ListItem
                                                key={index}
                                                title={item.title}
                                                to={item.href}
                                                className="bg-accent/30 rounded-md"
                                            >
                                                {item.discription}
                                            </ListItem>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Pricing */}
                            <NavigationMenuItem>
                                <div className={navigationMenuTriggerStyle() + " text-foreground/70 cursor-not-allowed"}>
                                    Pricing
                                </div>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="rounded-full opacity-70">
                        <GithubIcon className="w-5 h-5" />
                    </Button>
                    <ThemeToggleSquare />
                    <Button variant="outline" className="ml-2 opacity-70 cursor-not-allowed">
                        Sign In
                    </Button>
                    <Button className="ml-2 opacity-70 cursor-not-allowed">Sign Up</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center space-x-2">
                    <Button variant="ghost" size="icon" className="rounded-full opacity-70">
                        <GithubIcon className="w-5 h-5" />
                    </Button>
                    <ThemeToggleSquare />
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
};

// Mobile Menu Component
const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <ScrollArea className="h-full">
                    <div className="space-y-4 py-4">
                        {/* Mobile Navigation */}
                        <div className="px-4 py-2">
                            <h3 className="mb-2 px-2 text-lg font-semibold text-foreground/70">Features</h3>
                            <div className="space-y-1">
                                {_hero_nav_items.map((item, index) => (
                                    <MobileNavItem
                                        key={index}
                                        title={item.title}
                                        icon={<item.icon className="w-4 h-4 mr-2 text-primary/70" />}
                                        to={item.href}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="px-4 py-2">
                            <h3 className="mb-2 px-2 text-lg font-semibold text-foreground/70">About</h3>
                            <div className="space-y-1">
                                {_hero_nav_resources.map((item, index) => (
                                    <MobileNavItem
                                        key={index}
                                        title={item.title}
                                        to={item.href}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="px-4 py-2">
                            <MobileNavItem
                                title="Pricing"
                                to="/pricing"
                            />
                        </div>

                        <div className="px-4 pt-4 border-t opacity-30">
                            <div className="flex flex-col space-y-2">
                                <Button variant="outline" className="w-full opacity-70 cursor-not-allowed">
                                    Sign In
                                </Button>
                                <Button className="w-full opacity-70 cursor-not-allowed">Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

// Mobile Nav Item Component
const MobileNavItem = ({
    title,
    icon,
}: {
    title: string;
    icon?: React.ReactNode;
    to?: string;
}) => {
    return (
        <div className="flex items-center px-2 py-2 text-sm rounded-md opacity-30 text-foreground/70 cursor-not-allowed">
            {icon}
            {title}
        </div>
    );
};

interface FeatureCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    to: string;
}

const FeatureCard = ({ title, icon, description }: FeatureCardProps) => {
    return (
        <div className="flex flex-col p-3 rounded-md bg-accent/30 h-full">
            <div className="flex items-center gap-2 mb-2">
                {icon}
                <h3 className="font-medium text-foreground/70">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground/70">
                {description}
            </p>
        </div>
    );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
    to: string;
}

const ListItem = ({
    title,
    children,
    className,
    ...props
}: ListItemProps) => {
    return (
        <div className={`${className} bg-accent/30 text-foreground/70`} {...props}>
            <div className="block p-3 space-y-1 rounded-md">
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="text-sm leading-snug text-muted-foreground/70 line-clamp-2">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default Navbar;