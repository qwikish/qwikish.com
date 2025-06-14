import { testimonialsRow1, testimonialsRow2 } from "@/constants"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const Testimonials = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-background">
            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    💬 What Students Say About Qwikish
                </h2>
                <p className="text-lg text-muted-foreground">
                    Real feedback from students who transformed their learning
                </p>
            </div>

            {/* Side Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

            {/* First Row - Scroll Right */}
            <div className="relative mb-10 overflow-hidden marquee-wrapper">
                <div className="flex w-max animate-marquee space-x-6">
                    {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                        <Card key={`row1-${index}`} className={cn(
                            "flex-shrink-0 w-80 border-2 transition-all duration-300 hover:shadow-lg",
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
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="relative overflow-hidden marquee-wrapper">
                <div className="flex w-max animate-marquee-reverse space-x-6">
                    {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                        <Card key={`row2-${index}`} className={cn(
                            "flex-shrink-0 w-80 border-2 transition-all duration-300 hover:shadow-lg",
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
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
