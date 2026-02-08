import { useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Categorized venue images based on content analysis
const categories = {
    "Main Hall": [
        "/CP_03162.webp", "/CP_03163.webp", "/CP_03164.webp", "/CP_03165.webp",
        "/CP_03166.webp", "/CP_03167.webp", "/CP_03168.webp", "/CP_03169.webp",
        "/CP_03170.webp", "/CP_03171.webp", "/CP_03172.webp", "/CP_03177.webp",
        "/CP_03178.webp", "/CP_03179.webp", "/CP_03180.webp", "/CP_03181.webp",
        "/CP_03182.webp", "/CP_03183.webp", "/CP_03184.webp", "/CP_03185.webp",
        "/CP_03186.webp", "/CP_03187.webp", "/CP_03188.webp", "/CP_03189.webp",
        "/CP_03190.webp", "/CP_03191.webp", "/CP_03192.webp", "/CP_03193.webp",
        "/CP_03194.webp", "/CP_03195.webp",
    ],
    "Stage & Decor": [
        "/CP_03173.webp", "/CP_03174.webp", "/CP_03175.webp", "/CP_03176.webp",
        "/CP_03207.webp", "/CP_03208.webp", "/CP_03209.webp",
    ],
    "Exterior": [
        "/CP_03196.webp", "/CP_03197.webp", "/CP_03199.webp", "/CP_03200.webp",
        "/CP_03201.webp", "/CP_03202.webp", "/CP_03203.webp", "/CP_03204.webp",
        "/CP_03205.webp", "/CP_03206.webp", "/CP_03210.webp", "/CP_03211.webp",
        "/CP_03212.webp", "/CP_03213.webp", "/CP_03214.webp", "/CP_03215.webp",
        "/CP_03217.webp", "/CP_03218.webp", "/CP_03219.webp", "/CP_03220.webp",
        "/CP_03221.webp", "/CP_03222.webp",
    ],
    "Branding": [
        "/CP_03198.webp", "/CP_03227.webp", "/CP_03228.webp", "/CP_03229.webp",
        "/CP_03230.webp", "/CP_03238.webp",
    ],
    "Events": [
        "/CP_03242.webp", "/CP_03251.webp", "/CP_03257.webp", "/CP_03259.webp",
        "/WhatsApp Image 2025-12-27 at 10.38.13 AM.webp",
        "/WhatsApp Image 2026-01-29 at 11.29.34 AM.webp",
        "/WhatsApp Image 2026-01-29 at 11.29.35 AM.webp",
        "/WhatsApp Image 2026-01-29 at 11.29.36 AM.webp",
        "/WhatsApp Image 2026-01-29 at 11.29.37 AM.webp",
        "/WhatsApp Image 2026-02-02 at 3.29.21 AM.webp",
    ],
}

export function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeCategory, setActiveCategory] = useState("Main Hall")
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const currentImages = categories[activeCategory as keyof typeof categories] || categories["Main Hall"]

    const handlePrevImage = useCallback(() => {
        if (lightboxIndex === null) return
        setLightboxIndex(lightboxIndex === 0 ? currentImages.length - 1 : lightboxIndex - 1)
    }, [lightboxIndex, currentImages.length])

    const handleNextImage = useCallback(() => {
        if (lightboxIndex === null) return
        setLightboxIndex(lightboxIndex === currentImages.length - 1 ? 0 : lightboxIndex + 1)
    }, [lightboxIndex, currentImages.length])

    return (
        <section
            id="gallery"
            ref={sectionRef}
            className="py-16 sm:py-20 lg:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal mb-3 sm:mb-4">
                        Gallery
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                        Explore our stunning venue
                    </p>
                </div>

                {/* Category Tabs - Horizontally scrollable on mobile */}
                <div className="mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                        {Object.keys(categories).map((category) => (
                            <button
                                type="button"
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category)
                                    setLightboxIndex(null)
                                }}
                                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${activeCategory === category
                                    ? "bg-dark-charcoal text-white"
                                    : "bg-white text-dark-charcoal hover:bg-neutral-100 border border-neutral-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-3">
                    {currentImages.map((src, index) => (
                        <div
                            key={src}
                            className="break-inside-avoid mb-2 sm:mb-3"
                        >
                            <div
                                onClick={() => setLightboxIndex(index)}
                                className="relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer group active:scale-[0.98] transition-transform"
                            >
                                <img
                                    src={src}
                                    alt={`Venue photo ${index + 1}`}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox - Full screen on mobile */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        onClick={() => setLightboxIndex(null)}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            onClick={() => setLightboxIndex(null)}
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" strokeWidth={1.5} />
                        </button>

                        {/* Navigation - Larger touch targets on mobile */}
                        <button
                            type="button"
                            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium z-10">
                            {lightboxIndex + 1} / {currentImages.length}
                        </div>

                        {/* Image */}
                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            src={currentImages[lightboxIndex]}
                            alt={`Photo ${lightboxIndex + 1}`}
                            className="max-w-full max-h-full sm:max-w-[90vw] sm:max-h-[85vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
