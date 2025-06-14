"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Gift, Rocket } from "lucide-react";

// Utility function for conditional class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

interface PlanFeature {
    name: string;
    included: boolean;
    version: string;
    comingSoon?: boolean;
}

interface Plan {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    monthlyPriceUSD: string;
    annualPriceUSD: string;
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    buttonColor: string;
    popular?: boolean;
    features: PlanFeature[];
    version: string;
}

const plans: Plan[] = [
    {
        name: "Free Plan",
        description: "Perfect for getting started with AI-powered learning",
        monthlyPrice: 0,
        annualPrice: 0,
        monthlyPriceUSD: "Free",
        annualPriceUSD: "Free",
        icon: <Gift className="w-6 h-6" />,
        bgColor: "bg-slate-500/10 dark:bg-slate-500/20",
        borderColor: "border-slate-200 dark:border-slate-800",
        iconBg: "bg-slate-100 dark:bg-slate-900/50",
        iconColor: "text-slate-600 dark:text-slate-400",
        buttonColor: "bg-slate-600 hover:bg-slate-700",
        version: "V1",
        features: [
            { name: "AI-powered notes (limited requests/day)", included: true, version: "V1" },
            { name: "Create/edit flashcards & mind maps", included: true, version: "V1" },
            { name: "Generate quizzes from notes (daily limit)", included: true, version: "V1" },
            { name: "Task and time manager", included: true, version: "V1" },
            { name: "Access public skill roadmaps", included: true, version: "V1" },
            { name: "Resume builder (basic version)", included: true, version: "V2", comingSoon: true },
            { name: "Read-only access to community", included: true, version: "V2", comingSoon: true }
        ]
    },
    {
        name: "Starter Plan",
        description: "For students who need more than free at a pocket-friendly cost",
        monthlyPrice: 79,
        annualPrice: 799,
        monthlyPriceUSD: "$1",
        annualPriceUSD: "$10",
        icon: <Zap className="w-6 h-6" />,
        bgColor: "bg-green-500/10 dark:bg-green-500/20",
        borderColor: "border-green-200 dark:border-green-800",
        iconBg: "bg-green-100 dark:bg-green-900/50",
        iconColor: "text-green-600 dark:text-green-400",
        buttonColor: "bg-green-600 hover:bg-green-700",
        version: "V1 → V2",
        features: [
            { name: "Everything in Free, plus:", included: true, version: "" },
            { name: "More AI note requests per day", included: true, version: "V1" },
            { name: "Unlock flashcard review scheduling", included: true, version: "V1" },
            { name: "Daily smart quiz (1 topic/day)", included: true, version: "V1" },
            { name: "Save custom roadmaps", included: true, version: "V2", comingSoon: true },
            { name: "Access to community feed & reply", included: true, version: "V2", comingSoon: true }
        ]
    },
    {
        name: "Pro Plan",
        description: "Complete learning toolkit with unlimited AI features",
        monthlyPrice: 149,
        annualPrice: 1499,
        monthlyPriceUSD: "$3.49",
        annualPriceUSD: "$30",
        icon: <Crown className="w-6 h-6" />,
        bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
        borderColor: "border-blue-200 dark:border-blue-800",
        iconBg: "bg-blue-100 dark:bg-blue-900/50",
        iconColor: "text-blue-600 dark:text-blue-400",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
        popular: true,
        version: "V1 → V2",
        features: [
            { name: "Everything in Starter, plus:", included: true, version: "" },
            { name: "Unlimited AI note usage", included: true, version: "V1" },
            { name: "Full quiz generation (custom notes/topics)", included: true, version: "V1" },
            { name: "AI-personalized roadmaps", included: true, version: "V2", comingSoon: true },
            { name: "Flashcards with spaced repetition", included: true, version: "V1" },
            { name: "Smart task suggestions", included: true, version: "V2", comingSoon: true },
            { name: "Resume export with templates", included: true, version: "V2", comingSoon: true },
            { name: "Post/comment in community", included: true, version: "V2", comingSoon: true },
            { name: "Early access to job board", included: true, version: "V2", comingSoon: true }
        ]
    },
    {
        name: "Elite Plan",
        description: "Advanced AI tools and premium career support",
        monthlyPrice: 249,
        annualPrice: 2499,
        monthlyPriceUSD: "$5.99",
        annualPriceUSD: "$49",
        icon: <Rocket className="w-6 h-6" />,
        bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
        borderColor: "border-purple-200 dark:border-purple-800",
        iconBg: "bg-purple-100 dark:bg-purple-900/50",
        iconColor: "text-purple-600 dark:text-purple-400",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
        version: "V2 → V3",
        features: [
            { name: "Everything in Pro, plus:", included: true, version: "" },
            { name: "AI Mock Tests", included: true, version: "V3", comingSoon: true },
            { name: "AI Roadmap Buddy (LLM assistant)", included: true, version: "V3", comingSoon: true },
            { name: "Smart video recommendations", included: true, version: "V3", comingSoon: true },
            { name: "Group study tools (shared notes/quizzes)", included: true, version: "V3", comingSoon: true },
            { name: "Private study groups & community badges", included: true, version: "V3", comingSoon: true },
            { name: "Custom reminders & streak tracking", included: true, version: "V2 → V3", comingSoon: true },
            { name: "AI resume review & optimization", included: true, version: "V3", comingSoon: true }
        ]
    }
];

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false);
    const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Choose Your Learning Journey
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        Freemium model designed for students. Start free and upgrade as you grow,
                        with each plan unlocking more AI features and career support.
                    </p>
                </motion.div>

                {/* Billing Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center gap-4 mb-2"
                >
                    <span className={cn(
                        "text-sm font-medium transition-colors",
                        !isAnnual ? "text-foreground" : "text-muted-foreground"
                    )}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={cn(
                            "relative w-14 h-7 rounded-full transition-colors duration-200",
                            isAnnual ? "bg-blue-600" : "bg-muted"
                        )}
                    >
                        <div className={cn(
                            "absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-200",
                            isAnnual ? "translate-x-7" : "translate-x-0.5"
                        )} />
                    </button>
                    <span className={cn(
                        "text-sm font-medium transition-colors",
                        isAnnual ? "text-foreground" : "text-muted-foreground"
                    )}>
                        Annual
                    </span>
                </motion.div>
                <p className="text-xs text-muted-foreground">
                    Save up to 15% with annual billing
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onHoverStart={() => setHoveredPlan(index)}
                        onHoverEnd={() => setHoveredPlan(null)}
                        className="group"
                    >
                        <Card className={cn(
                            "relative h-full transition-all duration-300",
                            plan.borderColor,
                            "hover:scale-105 hover:shadow-xl",
                            hoveredPlan === index ? "shadow-xl scale-105" : "",
                            plan.popular ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""
                        )}>
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                    <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            {/* Version Badge */}
                            <div className="absolute -top-2 -right-2 z-20">
                                <Badge variant="outline" className={cn(
                                    "text-xs",
                                    plan.iconColor,
                                    plan.borderColor
                                )}>
                                    {plan.version}
                                </Badge>
                            </div>

                            {/* Background Gradient */}
                            <div className={cn(
                                "absolute inset-0 rounded-lg opacity-50",
                                plan.bgColor
                            )} />

                            <CardHeader className="relative z-10 text-center pb-4">
                                <div className={cn(
                                    "w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm",
                                    plan.iconBg
                                )}>
                                    <div className={plan.iconColor}>
                                        {plan.icon}
                                    </div>
                                </div>
                                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                                <CardDescription className="text-sm leading-relaxed">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="relative z-10 pt-0">
                                {/* Pricing */}
                                <div className="text-center mb-6">
                                    {plan.monthlyPrice === 0 ? (
                                        <div className="text-3xl font-bold text-foreground">Free</div>
                                    ) : (
                                        <>
                                            <div className="text-3xl font-bold text-foreground">
                                                ₹{isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                                                <span className="text-sm font-normal text-muted-foreground">
                                                    /month
                                                </span>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {isAnnual ? plan.annualPriceUSD : plan.monthlyPriceUSD} USD
                                            </div>
                                            {isAnnual && plan.monthlyPrice > 0 && (
                                                <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                                                    Save ₹{(plan.monthlyPrice * 12) - plan.annualPrice}/year
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{
                                                opacity: hoveredPlan === index ? 1 : 0.8,
                                                x: 0
                                            }}
                                            transition={{ duration: 0.2, delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1">
                                                <span className={cn(
                                                    feature.comingSoon ? "text-muted-foreground" : "text-foreground"
                                                )}>
                                                    {feature.name}
                                                </span>
                                                {feature.version && (
                                                    <Badge
                                                        variant="secondary"
                                                        className={cn(
                                                            "ml-2 text-xs",
                                                            feature.comingSoon ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" : ""
                                                        )}
                                                    >
                                                        {feature.comingSoon ? "Coming Soon" : feature.version}
                                                    </Badge>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <Button
                                    className={cn(
                                        "w-full transition-all duration-200",
                                        plan.monthlyPrice === 0 ? "bg-slate-600 hover:bg-slate-700" : plan.buttonColor
                                    )}
                                    size="lg"
                                >
                                    {plan.monthlyPrice === 0 ? "Get Started Free" : "Choose Plan"}
                                </Button>
                            </CardContent>

                            {/* Hover Effect Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredPlan === index ? 0.1 : 0 }}
                                className={cn(
                                    "absolute inset-0 rounded-lg",
                                    plan.bgColor.replace('5/10', '5/20').replace('5/20', '5/30')
                                )}
                            />
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
            >
                <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                            Why Choose Our Freemium Model?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Gift className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Always Free Core</h4>
                                <p className="text-sm text-muted-foreground">
                                    Essential learning tools remain free forever
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Student-Friendly Pricing</h4>
                                <p className="text-sm text-muted-foreground">
                                    Affordable plans designed for student budgets
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Crown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Grow As You Learn</h4>
                                <p className="text-sm text-muted-foreground">
                                    Upgrade when you need more advanced features
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Badge variant="secondary">No Hidden Fees</Badge>
                            <Badge variant="secondary">Cancel Anytime</Badge>
                            <Badge variant="secondary">Student Discounts Available</Badge>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}