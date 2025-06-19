import { type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTACardProps {
    icon: LucideIcon
    title: string
    description: string
    buttonText: string
    onClick?: () => void
    gradientFrom?: string
    gradientTo?: string
    className?: string
}

export function CTACard({
    icon: Icon,
    title,
    description,
    buttonText,
    onClick,
    gradientFrom = "from-blue-50/80",
    gradientTo = "to-purple-50/80",
    className,
}: CTACardProps) {
    return (
        <div className={cn(
            "relative rounded-xl border bg-gradient-to-br",
            gradientFrom,
            gradientTo,
            "dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30",
            "p-6 overflow-hidden",
            "hover:shadow-lg transition-all duration-300",
            className
        )}>
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/50 dark:bg-blue-800/20" />
            <div className="absolute -left-5 -bottom-5 h-24 w-24 rounded-full bg-purple-100/50 dark:bg-purple-800/20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-blue-800 dark:text-blue-100">
                    {title}
                </h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-md">
                    {description}
                </p>
                <Button
                    className="gap-2 px-6 shadow-sm hover:shadow-md transition-shadow"
                    onClick={onClick}
                >
                    <Icon className="h-4 w-4" />
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}