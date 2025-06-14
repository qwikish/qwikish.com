import { useEffect, useState } from "react";
import { ThemToggle } from "@/components/mode-toggle";
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
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

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
        <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-background/90 border-b shadow-sm" : "bg-background/80"}`}>
            <div className="flex items-center justify-between w-full p-3 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link
                        to="/"
                        className="text-lg font-bold hover:text-primary transition-colors"
                    >
                        Qwikish.com
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* Features Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                                    Features
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-lg shadow-lg border">
                                    <div className="grid grid-cols-2 gap-4 p-4 w-[600px]">
                                        {_hero_nav_items.map((item, index) => (
                                            <FeatureCard
                                                key={index}
                                                title={item.title}
                                                icon={<item.icon className="w-5 h-5 text-primary" />}
                                                description={item.discription}
                                                to={item.href}
                                            />
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* About Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                                    About
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-lg shadow-lg border">
                                    <div className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-2">
                                        <NavigationMenuLink className="row-span-3" asChild>
                                            <a
                                                className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md hover:bg-accent/50 transition-colors"
                                                href="/"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    Qwikish.com
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Qwikish.com is a one stop solution for students to learn,
                                                    organize and share their knowledge.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                        {_hero_nav_resources.map((item, index) => (
                                            <ListItem
                                                key={index}
                                                title={item.title}
                                                to={item.href}
                                                className="hover:bg-accent/50 rounded-md transition-colors"
                                            >
                                                {item.discription}
                                            </ListItem>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Pricing */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/pricing">Pricing</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Theme Toggle */}
                <div className="flex-shrink-0 flex items-center">
                    <Button variant="default" size={"icon"} className="mr-2">
                        <a href="https://github.com/qwikish/qwikish.com" target="_blank">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                    </Button>
                    <ThemToggle />
                    <Button className="ml-2" variant="outline">Sign In</Button>
                    <Button className="ml-2" variant="default">Sign Up</Button>
                </div>
            </div>
        </header>
    );
};

interface FeatureCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    to: string;
}

const FeatureCard = ({ title, icon, description, to }: FeatureCardProps) => {
    return (
        <NavigationMenuLink asChild>
            <Link
                to={to}
                className="flex flex-col p-3 rounded-md hover:bg-accent/50 transition-colors h-full"
            >
                <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <h3 className="font-medium">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </Link>
        </NavigationMenuLink>
    );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
    to: string;
}

const ListItem = ({ title, children, to, className, ...props }: ListItemProps) => {
    return (
        <div className={className} {...props}>
            <NavigationMenuLink asChild>
                <Link
                    to={to}
                    className="block p-3 space-y-1 rounded-md hover:bg-accent/50 transition-colors"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </div>
    );
};

export default Navbar;