import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, ExternalLink, Lock, UserCircle2 } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { _app_layout } from "@/constants"
import { ThemeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const roadmaps = _app_layout.roadmaps
  const externalLinks = _app_layout.externalLinks

  const combinedList = []
  const maxLength = Math.max(roadmaps.length, externalLinks.length)
  for (let i = 0; i < maxLength; i++) {
    if (roadmaps[i]) combinedList.push({ ...roadmaps[i], type: "roadmap" })
    if (externalLinks[i]) combinedList.push({ ...externalLinks[i], type: "external" })
  }

  return (
    <nav className="sticky top-0 py-2 z-50 bg-background/95 backdrop-blur border-b borpri supports-[backdrop-filter]:bg-background/60 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">Qwikish</h1>
            <span className="text-xs sm:text-sm text-muted-foreground">Roadmaps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            {/* External Links */}
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9">
                      <Menu className="w-4 h-4 mr-2" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-4 grid grid-cols-2 gap-3">
                        {externalLinks.map((item) => {
                          const isDisabled = !item.isAvailable
                          return (
                            <NavigationMenuLink asChild key={item.title}>
                              {isDisabled ? (
                                <div className="p-3 rounded-md opacity-40 cursor-not-allowed">
                                  <div className="flex gap-2 items-center">
                                    <Lock className="w-3 h-3" />
                                    <span className="text-sm font-medium">{item.title}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground">{item.description}</p>
                                </div>
                              ) : (
                                <Link
                                  to={item.url}
                                  className="p-3 block rounded-md hover:bg-accent hover:text-accent-foreground"
                                >
                                  <div className="flex gap-2 items-center">
                                    <span className="text-sm font-medium">{item.title}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </div>
                                  <p className="text-xs text-muted-foreground">{item.description}</p>
                                </Link>
                              )}
                            </NavigationMenuLink>
                          )
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9">Roadmaps</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-4 space-y-2">
                        {roadmaps.map((item) => {
                          const isDisabled = !item.isAvailable
                          return (
                            <NavigationMenuLink asChild key={item.title}>
                              {isDisabled ? (
                                <div className="p-3 rounded-md opacity-40 cursor-not-allowed">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">{item.title}</span>
                                    <Lock className="w-3 h-3" />
                                  </div>
                                  <p className="text-xs text-muted-foreground">{item.description}</p>
                                </div>
                              ) : (
                                <Link
                                  to={item.url}
                                  className="p-3 block rounded-md hover:bg-accent hover:text-accent-foreground"
                                >
                                  <span className="text-sm font-medium">{item.title}</span>
                                  <p className="text-xs text-muted-foreground">{item.description}</p>
                                </Link>
                              )}
                            </NavigationMenuLink>
                          )
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

            </div>
    
            {/* Theme & User Menu */}
            <div className="flex items-center gap-4 ml-4">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <UserCircle2 className="w-6 h-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Explore roadmaps and resources</SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-4">
                  {combinedList.map((item, index) => {
                    const isDisabled = !item.isAvailable
                    const Icon = item.type === "external" ? ExternalLink : Lock

                    return isDisabled ? (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-md opacity-40 cursor-not-allowed"
                      >
                        <Icon className="w-4 h-4 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={item.url}
                        onClick={() => setIsOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon className="w-4 h-4 mt-0.5 opacity-70" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
