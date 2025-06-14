
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const Cta = () => {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 border-2 border-purple-200">
                    <CardContent className="p-12 text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            🎓 Ready to Supercharge Your Learning?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Start your journey with Qwikish and make your study sessions productive, focused, and even fun.
                        </p>

                        <Button
                            size="lg"
                            className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 mb-6"
                        >
                            Get Started Free – No Credit Card Needed
                        </Button>

                        <div className="flex justify-center gap-4 flex-wrap">
                            <Badge variant="secondary">✨ 5 Features Available</Badge>
                            <Badge variant="secondary">🎯 Free Forever</Badge>
                            <Badge variant="secondary">🚀 No Credit Card</Badge>
                            <Badge variant="outline" className="border-orange-200 bg-orange-50 text-orange-800">
                                ⏰ 4 More Coming Soon
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}

export default Cta