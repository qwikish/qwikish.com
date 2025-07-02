import { Button } from "@/components/ui/button"

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-baseline gap-2 mb-4">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Qwikish
                            </h3>
                            <span className="text-sm text-muted-foreground">roadmaps</span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Transform your learning with AI-powered tools and structured roadmaps designed for students who want to excel.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="outline" size="sm" className="text-muted-foreground border-muted-foreground/30 hover:bg-muted">
                                Twitter/X
                            </Button>
                            <Button variant="outline" size="sm" className="text-muted-foreground border-muted-foreground/30 hover:bg-muted">
                                LinkedIn
                            </Button>
                            <Button variant="outline" size="sm" className="text-muted-foreground border-muted-foreground/30 hover:bg-muted">
                                Discord
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Products</h4>
                        <div className="space-y-2">
                            <div>
                                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                                    AI Notes
                                </Button>
                            </div>
                            <div>
                                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                                    Roadmaps
                                </Button>
                            </div>
                            <div>
                                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                                    Flashcards
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                        <div className="space-y-2">
                            <div>
                                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                                    Terms
                                </Button>
                            </div>
                            <div>
                                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                                    Privacy
                                </Button>
                            </div>
                            <div>
                                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                                    Cookies
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>© 2024 Qwikish. All rights reserved. Made with ❤️ for learners worldwide.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer