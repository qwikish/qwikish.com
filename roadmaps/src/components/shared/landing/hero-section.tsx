import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center  px-4 text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Intelligent Paths to Your Next Big Goal. <span className="text-2xl">(by Qwikish)</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                            Backed by Qwikish, our comprehensive roadmaps offer curated courses, docs, videos, and a supportive community to accelerate your learning journey.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Button size="lg" asChild>
                            <Link to="/">Get Started</Link>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 text-primary" size="lg" asChild>
                            <Link to="/">
                                Live Demo <span aria-hidden="true">→</span>
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            Personalized Roadmaps
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                            </span>
                            Interactive Learning
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
                            </span>
                            Community Support
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 animate-bounce rounded-full"
                    aria-label="Scroll down"
                >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </Button>
            </motion.div>
        </section>
    );
};

export default HeroSection;