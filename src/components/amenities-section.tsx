import {
    Wifi,
    Speaker,
    Snowflake,
    ChefHat,
    Car,
    Shield,
    Sparkles,
    Headphones,
} from "lucide-react"

const amenities = [
    {
        icon: Sparkles,
        title: "Premium Interiors",
        description: "Elegant decor with crystal chandeliers",
    },
    {
        icon: Speaker,
        title: "HD Sound System",
        description: "Professional audio for any event",
    },
    {
        icon: Snowflake,
        title: "Central AC",
        description: "Climate controlled comfort",
    },
    {
        icon: ChefHat,
        title: "Catering Services",
        description: "In-house culinary excellence",
    },
    {
        icon: Car,
        title: "Ample Parking",
        description: "Spacious parking facility",
    },
    {
        icon: Shield,
        title: "24/7 Security",
        description: "Round-the-clock safety",
    },
    {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Seamless connectivity",
    },
    {
        icon: Headphones,
        title: "Event Support",
        description: "Dedicated coordination team",
    },
]

export function AmenitiesSection() {
    return (
        <section
            id="amenities"
            className="py-24 lg:py-32 bg-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dark-charcoal mb-5">
                        Amenities
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Everything you need for a flawless event
                    </p>
                </div>

                {/* Modern Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {amenities.map((amenity) => (
                        <div
                            key={amenity.title}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300">
                                <amenity.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                            </div>

                            {/* Text */}
                            <h3 className="font-semibold text-dark-charcoal mb-1 text-sm">
                                {amenity.title}
                            </h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {amenity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
