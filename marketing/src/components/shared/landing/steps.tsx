
import { motion } from "framer-motion";
import { howItWorksSteps } from "@/constants";
import { cn } from "@/lib/utils";




export default function Setps() {

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    🧩 How Qwikish Works
                </h2>
                <p className="text-lg text-muted-foreground">
                    Four simple steps to transform your learning experience
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorksSteps.map((step, index) => (
                    <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="text-center"
                    >
                        <div className={cn(
                            "w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg",
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
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>



    );
}