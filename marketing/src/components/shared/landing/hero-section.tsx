import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                One App to Learn Smarter, Faster, and Together
            </motion.h1>

            <motion.p
                className="text-lg sm:text-xl max-w-2xl text-muted-foreground mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Qwikish helps students take AI-powered notes, generate quizzes, track tasks, and connect with a motivated peer community — all in one beautifully simple workspace.
            </motion.p>


            <Link to="/app">
                <Button className="px-8 py-3" size={"lg"}>
                    Get Started
                </Button>
            </Link>
            <div className="flex justify-center gap-6 mt-5 flex-wrap text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>5 Features Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>No Credit Card Required</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
