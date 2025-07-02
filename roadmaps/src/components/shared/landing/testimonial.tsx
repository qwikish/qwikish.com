import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roadmapTestimonials = {
    row1: [
        {
            name: "Alex Chen",
            role: "Frontend Developer",
            quote: "The frontend roadmap helped me structure my learning perfectly. I went from basics to React mastery in 3 months!",
            avatar: "👨‍💻",
            avatarBg: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300",
            borderColor: "border-blue-200 dark:border-blue-800",
            bgColor: "bg-blue-50/50 dark:bg-blue-900/20"
        },
        {
            name: "Priya Patel",
            role: "Data Science Student",
            quote: "The ML roadmap was a game-changer. The step-by-step resources helped me build my first model within weeks.",
            avatar: "👩‍🔬",
            avatarBg: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300",
            borderColor: "border-purple-200 dark:border-purple-800",
            bgColor: "bg-purple-50/50 dark:bg-purple-900/20"
        },
        {
            name: "Jamal Williams",
            role: "DevOps Engineer",
            quote: "Finally a roadmap that covers all the DevOps essentials without overwhelming me. The cloud section was especially helpful.",
            avatar: "👨‍💻",
            avatarBg: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300",
            borderColor: "border-green-200 dark:border-green-800",
            bgColor: "bg-green-50/50 dark:bg-green-900/20"
        },
        {
            name: "Sophia Kim",
            role: "UX Designer",
            quote: "As a designer transitioning to UX, this roadmap gave me exactly the right learning sequence. The portfolio projects were gold!",
            avatar: "👩‍🎨",
            avatarBg: "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300",
            borderColor: "border-orange-200 dark:border-orange-800",
            bgColor: "bg-orange-50/50 dark:bg-orange-900/20"
        }
    ],
    row2: [
        {
            name: "Miguel Rodriguez",
            role: "Backend Developer",
            quote: "The backend roadmap helped me fill knowledge gaps I didn't even know I had. Now I'm much more confident in system design.",
            avatar: "👨‍💻",
            avatarBg: "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300",
            borderColor: "border-red-200 dark:border-red-800",
            bgColor: "bg-red-50/50 dark:bg-red-900/20"
        },
        {
            name: "Emma Zhang",
            role: "Computer Science Student",
            quote: "I followed the DSA roadmap and landed my dream internship! The progression from easy to hard problems was perfect.",
            avatar: "👩‍🎓",
            avatarBg: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300",
            borderColor: "border-yellow-200 dark:border-yellow-800",
            bgColor: "bg-yellow-50/50 dark:bg-yellow-900/20"
        },
        {
            name: "David Wilson",
            role: "Career Changer",
            quote: "Coming from marketing, the full-stack roadmap gave me the structure I needed to break into tech within a year.",
            avatar: "🧑‍💼",
            avatarBg: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300",
            borderColor: "border-indigo-200 dark:border-indigo-800",
            bgColor: "bg-indigo-50/50 dark:bg-indigo-900/20"
        },
        {
            name: "Aisha Johnson",
            role: "Mobile Developer",
            quote: "The Flutter roadmap saved me months of trial and error. The curated resources were exactly what I needed at each stage.",
            avatar: "👩‍💻",
            avatarBg: "bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300",
            borderColor: "border-teal-200 dark:border-teal-800",
            bgColor: "bg-teal-50/50 dark:bg-teal-900/20"
        }
    ]
};

export default function RoadmapTestimonials() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Calculate the total width of one full set of testimonials
    const itemWidth = 320; // w-80 = 320px
    const gap = 24; // space-x-6 = 24px
    const row1Width = (itemWidth + gap) * roadmapTestimonials.row1.length;
    const row2Width = (itemWidth + gap) * roadmapTestimonials.row2.length;
    return (
        <section className="relative w-full py-20 overflow-hidden bg-background">
            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    🗣️ Roadmap Success Stories
                </h2>
                <p className="text-lg text-muted-foreground">
                    Hear from learners who achieved their goals with our roadmaps
                </p>
            </div>

            {/* Side Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

            {/* First Row - Scroll Right */}
            <div className="relative mb-10 overflow-hidden">
                <motion.div
                    className="flex space-x-6"
                    animate={{
                        x: [0, -row1Width],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...roadmapTestimonials.row1, ...roadmapTestimonials.row1].map((testimonial, index) => (
                        <div
                            key={`row1-${index}`}
                            className="flex-shrink-0 w-80"
                        >
                            <Card className={cn(
                                "border-2 hover:shadow-lg transition-all duration-300",
                                testimonial.borderColor,
                                testimonial.bgColor
                            )}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center text-2xl",
                                            testimonial.avatarBg
                                        )}>
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-foreground italic text-sm">"{testimonial.quote}"</p>
                                    <div className="mt-3 flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-500">★</span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="relative overflow-hidden">
                <motion.div
                    className="flex space-x-6"
                    animate={{
                        x: isMounted ? [-row2Width, 0] : [0, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...roadmapTestimonials.row2, ...roadmapTestimonials.row2].map((testimonial, index) => (
                        <div
                            key={`row2-${index}`}
                            className="flex-shrink-0 w-80"
                        >
                            <Card className={cn(
                                "border-2 hover:shadow-lg transition-all duration-300",
                                testimonial.borderColor,
                                testimonial.bgColor
                            )}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center text-2xl",
                                            testimonial.avatarBg
                                        )}>
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-foreground italic text-sm">"{testimonial.quote}"</p>
                                    <div className="mt-3 flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-500">★</span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View More Success Stories
                </Button>
            </div>
        </section>
    );
}