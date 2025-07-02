"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function PricingSection() {
    return (
        <section className="w-full bg-background mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                            Choose the perfect plan for your learning journey with our student-friendly options
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Button
                            size="lg"
                            className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            asChild
                        >
                            <Link to="https://qwikish.com/pricing">
                                View All Pricing Plans on Qwikish.com
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                            Why Choose Qwikish?
                        </h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Badge variant="secondary">Free Core Features</Badge>
                            <Badge variant="secondary">Student Discounts</Badge>
                            <Badge variant="secondary">No Hidden Fees</Badge>
                            <Badge variant="secondary">Cancel Anytime</Badge>
                        </div>
                    </div>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our roadmap features are included with all Qwikish plans.
                        Upgrade to unlock advanced AI tools and premium learning features.
                    </p>
                </motion.div>
            </div>

        </section>
    );
}