import { useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Categorized venue images based on content analysis
const categories = {
    "Main Hall": [
        "/CP_03162.JPG", "/CP_03163.JPG", "/CP_03164.JPG", "/CP_03165.JPG",
        "/CP_03166.JPG", "/CP_03167.JPG", "/CP_03168.JPG", "/CP_03169.JPG",
        "/CP_03170.JPG", "/CP_03171.JPG", "/CP_03172.JPG", "/CP_03177.JPG",
        "/CP_03178.JPG", "/CP_03179.JPG", "/CP_03180.JPG", "/CP_03181.JPG",
        "/CP_03182.JPG", "/CP_03183.JPG", "/CP_03184.JPG", "/CP_03185.JPG",
        "/CP_03186.JPG", "/CP_03187.JPG", "/CP_03188.JPG", "/CP_03189.JPG",
        "/CP_03190.JPG", "/CP_03191.JPG", "/CP_03192.JPG", "/CP_03193.JPG",
        "/CP_03194.JPG", "/CP_03195.JPG",
    ],
    "Stage & Decor": [
        "/CP_03173.JPG", "/CP_03174.JPG", "/CP_03175.JPG", "/CP_03176.JPG",
        "/CP_03207.JPG", "/CP_03208.JPG", "/CP_03209.JPG",
    ],
    "Exterior": [
        "/CP_03196.JPG", "/CP_03197.JPG", "/CP_03199.JPG", "/CP_03200.JPG",
        "/CP_03201.JPG", "/CP_03202.JPG", "/CP_03203.JPG", "/CP_03204.JPG",
        "/CP_03205.JPG", "/CP_03206.JPG", "/CP_03210.JPG", "/CP_03211.JPG",
        "/CP_03212.JPG", "/CP_03213.JPG", "/CP_03214.JPG", "/CP_03215.JPG",
        "/CP_03217.JPG", "/CP_03218.JPG", "/CP_03219.JPG", "/CP_03220.JPG",
        "/CP_03221.JPG", "/CP_03222.JPG",
    ],
    "Branding": [
        "/CP_03198.JPG", "/CP_03227.JPG", "/CP_03228.JPG", "/CP_03229.JPG",
        "/CP_03230.JPG", "/CP_03238.JPG",
    ],
    "Events": [
        "/CP_03242.JPG", "/CP_03251.JPG", "/CP_03257.JPG", "/CP_03259.JPG",
        "/WhatsApp Image 2025-12-27 at 10.38.13 AM.jpeg",
        "/WhatsApp Image 2026-01-29 at 11.29.34 AM.jpeg",
        "/WhatsApp Image 2026-01-29 at 11.29.35 AM.jpeg",
        "/WhatsApp Image 2026-01-29 at 11.29.36 AM.jpeg",
        "/WhatsApp Image 2026-01-29 at 11.29.37 AM.jpeg",
        "/WhatsApp Image 2026-02-02 at 3.29.21 AM.jpeg",
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
            className="py-16 sm:py-20 lg:py-32 bg-neutral-50"
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
