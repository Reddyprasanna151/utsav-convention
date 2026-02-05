import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const packages = [
    {
        name: "Essential",
        price: "₹2,50,000",
        period: "starting from",
        description: "Perfect for intimate gatherings and small corporate events",
        features: [
            "Venue rental (8 hours)",
            "Basic AV equipment",
            "Standard seating arrangements",
            "Parking for 50 vehicles",
            "Basic decor package",
            "Event coordinator support",
        ],
        cta: "Get Quote",
        popular: false,
    },
    {
        name: "Premium",
        price: "₹5,00,000",
        period: "starting from",
        description: "Ideal for medium-sized events with enhanced features",
        features: [
            "Venue rental (12 hours)",
            "Premium AV with LED walls",
            "Custom seating layouts",
            "Valet parking for 100 vehicles",
            "Premium decor package",
            "Dedicated event manager",
            "In-house catering for 300",
            "Photography zone setup",
        ],
        cta: "Get Quote",
        popular: true,
    },
    {
        name: "Luxe",
        price: "₹10,00,000",
        period: "starting from",
        description: "Exclusive package for grand celebrations and premium events",
        features: [
            "Venue rental (24 hours)",
            "Full AV production team",
            "Bespoke seating design",
            "Unlimited valet parking",
            "Custom luxury decor",
            "Executive event team",
            "Gourmet catering for 500+",
            "Professional photography",
            "Green room & bridal suite",
            "Priority booking privileges",
        ],
        cta: "Contact Us",
        popular: false,
    },
]

export function PricingSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section
            id="pricing"
            ref={sectionRef}
            className="py-20 lg:py-32 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                        Pricing
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal mb-6 text-balance">
                        Transparent & Flexible Packages
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Choose from our curated packages or customize one that perfectly fits
                        your vision and budget.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative rounded-3xl p-8 ${pkg.popular
                                    ? "bg-gradient-to-br from-royal-blue to-deep-purple text-white"
                                    : "bg-soft-gray text-dark-charcoal"
                                }`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-8">
                                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                                <p className={`text-sm ${pkg.popular ? "text-white/70" : "text-muted-foreground"}`}>
                                    {pkg.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="font-serif text-4xl font-bold">{pkg.price}</span>
                                </div>
                                <span className={`text-sm ${pkg.popular ? "text-white/60" : "text-muted-foreground"}`}>
                                    {pkg.period}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full ${pkg.popular ? "bg-gold" : "bg-gold/20"
                                            } flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                            <Check className={`w-3 h-3 ${pkg.popular ? "text-white" : "text-gold"}`} />
                                        </div>
                                        <span className={`text-sm ${pkg.popular ? "text-white/90" : "text-dark-charcoal"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                asChild
                                className={`w-full ${pkg.popular
                                        ? "bg-white text-royal-blue hover:bg-white/90"
                                        : "bg-royal-blue text-white hover:bg-royal-blue/90"
                                    }`}
                            >
                                <a href="#contact" className="flex items-center justify-center gap-2">
                                    {pkg.cta}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Package Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center text-muted-foreground mt-12"
                >
                    Need a custom package? <a href="#contact" className="text-gold font-semibold hover:underline">Contact us</a> for a personalized quote.
                </motion.p>
            </div>
        </section>
    )
}
