import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/mode-toggle";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Github, Menu, } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
            className={cn(
                "fixed top-0 z-50 w-full border-b transition-all",
                scrolled
                    ? "bg-background/90 backdrop-blur-md border-border/40"
                    : "bg-background/80"
            )}
        >
            <div className="max-w-6xl mx-auto flex h-16 items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-primary">Qwikish <span className="text-muted-foreground text-sm">Roadmaps</span></h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-primary">Product</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Qwikish  <span className="text-muted-foreground text-sm">Roadmaps</span>
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Qwikish is a roadmapping tool that helps you plan your next big project.
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem to="/features" title="Features">
                                            Everything you need in one place
                                        </ListItem>
                                        <ListItem to="/integrations" title="Integrations">
                                            Simplify your workflow
                                        </ListItem>
                                        <ListItem to="/templates" title="Templates">
                                            Save time by using templates
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem className="text-primary">
                                <Link to="/pricing" >
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem className="text-primary">
                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <ListItem to="/blog" title="Blog">
                                            Learn more about Qwikish
                                        </ListItem>
                                        <ListItem to="/docs" title="Documentation">
                                            How to use Qwikish
                                        </ListItem>
                                        <ListItem to="/guides" title="Guides">
                                            How to use Qwikish roadmaps
                                        </ListItem>
                                        <ListItem to="/examples" title="Examples">
                                            Qwikish roadmaps in action
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Github className="h-4 w-4 text-primary" />
                    </Button>
                    <ThemeToggle />
                    <Button variant="outline" asChild className="text-primary">
                        <Link to="/login">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/signup">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-2">
                    <Button variant="outline" size="icon" className="rounded-full text-primary">
                        <Github className="h-4 w-4 text-primary"/>
                    </Button>
                    <ThemeToggle />
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
};

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <ScrollArea className="h-full py-6 pl-6">
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-medium">Product</h4>
                        <MobileNavItem to="/features">Features</MobileNavItem>
                        <MobileNavItem to="/pricing">Pricing</MobileNavItem>
                        <MobileNavItem to="/integrations">Integrations</MobileNavItem>
                        <MobileNavItem to="/templates">Templates</MobileNavItem>

                        <h4 className="pt-4 font-medium">Resources</h4>
                        <MobileNavItem to="/blog">Blog</MobileNavItem>
                        <MobileNavItem to="/docs">Documentation</MobileNavItem>
                        <MobileNavItem to="/guides">Guides</MobileNavItem>

                        <div className="pt-4">
                            <Button className="w-full mb-2" asChild>
                                <Link to="/signup">Get Started</Link>
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                                <Link to="/login">Sign In</Link>
                            </Button>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

const MobileNavItem = ({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) => {
    return (
        <Link
            to={to}
            className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
            {children}
        </Link>
    );
};

const ListItem = ({
    className,
    title,
    children,
    to,
    ...props
}: {
    className?: string;
    title: string;
    children: React.ReactNode;
    to: string;
}) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={to}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};

export default Navbar;