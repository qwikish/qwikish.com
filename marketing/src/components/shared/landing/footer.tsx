import { Button } from "@/components/ui/button"

const Footer = () => {
    return (

        <footer className="bg-muted/50 border-t">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Qwikish
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            Transform your learning with AI-powered tools designed for students who want to excel.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="outline" size="sm">Twitter/X</Button>
                            <Button variant="outline" size="sm">LinkedIn</Button>
                            <Button variant="outline" size="sm">Discord</Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div><Button variant="link" className="p-0 h-auto">About</Button></div>
                            <div><Button variant="link" className="p-0 h-auto">Blog</Button></div>
                            <div><Button variant="link" className="p-0 h-auto">Contact</Button></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div><Button variant="link" className="p-0 h-auto">Terms of Service</Button></div>
                            <div><Button variant="link" className="p-0 h-auto">Privacy Policy</Button></div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>© 2024 Qwikish. All rights reserved. Made with ❤️ for students.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer