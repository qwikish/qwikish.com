import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Bookmark, Compass, Layers, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const roadmapSteps = [
    {
        step: "1",
        title: "Discover Roadmaps",
        description: "Browse our curated collection of learning paths for various tech domains",
        icon: <Compass className="w-6 h-6" />,
        iconBg: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300",
        iconColor: "text-white",
        bgColor: "bg-blue-600 dark:bg-blue-800"
    },
    {
        step: "2",
        title: "Select Your Path",
        description: "Choose a roadmap that matches your skill level and learning goals",
        icon: <Bookmark className="w-6 h-6" />,
        iconBg: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300",
        iconColor: "text-white",
        bgColor: "bg-purple-600 dark:bg-purple-800"
    },
    {
        step: "3",
        title: "Track Progress",
        description: "Mark completed steps and monitor your advancement through the roadmap",
        icon: <Layers className="w-6 h-6" />,
        iconBg: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300",
        iconColor: "text-white",
        bgColor: "bg-green-600 dark:bg-green-800"
    },
    {
        step: "4",
        title: "Achieve Mastery",
        description: "Complete the roadmap and earn recognition for your new skills",
        icon: <Rocket className="w-6 h-6" />,
        iconBg: "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300",
        iconColor: "text-white",
        bgColor: "bg-orange-600 dark:bg-orange-800"
    }
];

export default function RoadmapSteps() {
    return (
        <section className="w-full px-4 py-16 bg-background">
            <div className="max-w-6xl  mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-foreground mb-4"
                    >
                        🗺️ How Roadmaps Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        Structured learning paths to guide your tech journey
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roadmapSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="text-center"
                        >
                            <div className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg",
                                step.iconBg
                            )}>
                                {step.icon}
                            </div>
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4",
                                step.iconColor,
                                step.bgColor
                            )}>
                                {step.step}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <Button size="lg" className="cursor-pointer">
                        Explore All Roadmaps <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}