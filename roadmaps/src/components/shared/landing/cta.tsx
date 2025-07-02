import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Cta = () => {
    return (
        <section className="w-full bg-background px-4 py-16">
            <motion.div
                className="max-w-4xl  mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className={cn(
                    "bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10",
                    "border-2 border-primary/20 dark:border-primary/30"
                )}>
                    <CardContent className="p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            🎓 Ready to Supercharge Your Learning?
                        </h2>
                        <p className="text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                            Start your journey with Qwikish and make your study sessions productive, focused, and even fun.
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <Button
                                size="lg"
                                className={cn(
                                    "text-lg md:text-xl px-8 py-6 md:px-12",
                                    "bg-gradient-to-r from-primary to-primary/80",
                                    "hover:from-primary/90 hover:to-primary/70"
                                )}
                            >
                                Get Started Free – No Credit Card Needed
                            </Button>

                            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                                <Badge variant="secondary" className="text-xs md:text-sm">
                                    🎯 Free Forever
                                </Badge>
                                <Badge variant="secondary" className="text-xs md:text-sm">
                                    🚀 No Credit Card
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}

export default Cta;