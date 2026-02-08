import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Ruler, Maximize2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const spaces = [
    {
        id: 1,
        name: "Grand Ballroom",
        image: "/CP_03199.webp",
        capacity: 3000,
        area: "45,000 sq ft",
        features: ["Pillar-free", "Crystal Chandeliers", "AV-equipped"],
        layouts: ["Theatre", "Banquet", "Cocktail"],
        description: "Our flagship venue with soaring ceilings and elegant crystal chandeliers, perfect for grand celebrations.",
    },
    {
        id: 2,
        name: "Executive Conference",
        image: "/CP_03200.webp",
        capacity: 200,
        area: "5,000 sq ft",
        features: ["Boardroom Style", "LED Display", "Video Conferencing"],
        layouts: ["Boardroom", "U-Shape", "Theatre"],
        description: "A sophisticated space designed for high-level meetings and corporate presentations.",
    },
    {
        id: 3,
        name: "Exhibition Hall",
        image: "/CP_03201.webp",
        capacity: 5000,
        area: "60,000 sq ft",
        features: ["Pillar-free", "Loading Docks", "High Ceilings"],
        layouts: ["Exhibition", "Concert", "Trade Show"],
        description: "Massive column-free space ideal for trade shows, exhibitions, and large-scale events.",
    },
    {
        id: 4,
        name: "Garden Lawn",
        image: "/CP_03202.webp",
        capacity: 2000,
        area: "30,000 sq ft",
        features: ["Open-air", "Landscaped", "Night Lighting"],
        layouts: ["Outdoor Reception", "Garden Party", "Ceremony"],
        description: "Beautifully manicured outdoor venue perfect for weddings and evening celebrations.",
    },
    {
        id: 5,
        name: "VIP Lounge",
        image: "/CP_03203.webp",
        capacity: 100,
        area: "3,000 sq ft",
        features: ["Private Bar", "Premium Decor", "Exclusive Access"],
        layouts: ["Lounge", "Cocktail", "Private Dining"],
        description: "An intimate, luxurious space for exclusive gatherings and VIP entertainment.",
    },
    {
        id: 6,
        name: "Breakout Rooms",
        image: "/CP_03204.webp",
        capacity: 50,
        area: "1,500 sq ft",
        features: ["Modular", "Whiteboard Walls", "Natural Light"],
        layouts: ["Classroom", "Workshop", "Meeting"],
        description: "Flexible spaces perfect for workshops, breakout sessions, and smaller meetings.",
    },
]

export function VenueSpaces() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedLayout, setSelectedLayout] = useState<{ [key: number]: string }>({})

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? spaces.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === spaces.length - 1 ? 0 : prev + 1))
    }

    return (
        <section
            id="spaces"
            ref={sectionRef}
            className="py-20 lg:py-32 bg-soft-gray"
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
                        Our Spaces
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal mb-6 text-balance">
                        Versatile Venues for Every Occasion
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        From intimate gatherings to grand celebrations, discover spaces designed
                        to bring your vision to life.
                    </p>
                </motion.div>

                {/* Spaces Gallery */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10 px-2 lg:-mx-16">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrev}
                            className="pointer-events-auto w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-dark-charcoal hover:text-gold transition-colors"
                            aria-label="Previous space"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            className="pointer-events-auto w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-dark-charcoal hover:text-gold transition-colors"
                            aria-label="Next space"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `calc(-${activeIndex * 100}% - ${activeIndex * 24}px)` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {spaces.map((space, index) => (
                                <motion.div
                                    key={space.id}
                                    className={`flex-shrink-0 w-full lg:w-[calc(50%-12px)] ${index === activeIndex ? "opacity-100" : "opacity-70"
                                        }`}
                                    animate={{
                                        scale: index === activeIndex ? 1 : 0.95,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <img
                                                src={space.image}
                                                alt={space.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Overlay with Quick Info */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {space.features.map((feature) => (
                                                        <span
                                                            key={feature}
                                                            className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="font-serif text-2xl font-bold text-dark-charcoal mb-2">
                                                {space.name}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                                {space.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="flex items-center gap-6 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4 text-gold" />
                                                    <span className="text-sm text-dark-charcoal font-medium">
                                                        {space.capacity.toLocaleString()} guests
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Ruler className="w-4 h-4 text-gold" />
                                                    <span className="text-sm text-dark-charcoal font-medium">
                                                        {space.area}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Layout Options */}
                                            <div className="mb-4">
                                                <span className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">
                                                    Available Layouts
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {space.layouts.map((layout) => (
                                                        <button
                                                            type="button"
                                                            key={layout}
                                                            onClick={() => setSelectedLayout({ ...selectedLayout, [space.id]: layout })}
                                                            className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${selectedLayout[space.id] === layout
                                                                    ? "bg-gold text-white"
                                                                    : "bg-soft-gray text-dark-charcoal hover:bg-gold/10"
                                                                }`}
                                                        >
                                                            {layout}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <Button
                                                asChild
                                                className="w-full bg-royal-blue hover:bg-royal-blue/90 text-white"
                                            >
                                                <a href="#contact" className="flex items-center justify-center gap-2">
                                                    <Maximize2 className="w-4 h-4" />
                                                    View Details & Book
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {spaces.map((_, index) => (
                            <button
                                type="button"
                                key={`dot-${index}`}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "w-8 bg-gold"
                                        : "bg-dark-charcoal/20 hover:bg-dark-charcoal/40"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
