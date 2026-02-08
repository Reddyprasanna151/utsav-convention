import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, scale }}
            >
                <img
                    src="/CP_03198.webp"
                    alt="Utsav Convention Hall exterior"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-24"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-10"
                    >
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                        <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">Now Open in Kadapa</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="block"
                        >
                            Your Perfect
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.55 }}
                            className="block bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent"
                        >
                            Celebration
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="block"
                        >
                            Starts Here
                        </motion.span>
                    </h1>

                    {/* Subheadline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="max-w-md sm:max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light mb-3">
                            Premium convention hall for
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/90 font-medium tracking-[0.15em] sm:tracking-[0.2em]">
                            WEDDINGS&nbsp;&nbsp;|&nbsp;&nbsp;BIRTHDAY PARTIES&nbsp;&nbsp;|&nbsp;&nbsp;SOCIAL EVENTS&nbsp;&nbsp;|&nbsp;&nbsp;CORPORATE EVENTS&nbsp;&nbsp;|&nbsp;&nbsp;SHOOTS &amp; MORE
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-white font-semibold w-full sm:w-auto px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-gold/25"
                        >
                            Book Your Event
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#gallery"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium w-full sm:w-auto px-6 py-4 transition-colors"
                        >
                            View Gallery
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-3 text-white/50 hover:text-white/80 transition-colors"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                    <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1 h-1.5 bg-white/60 rounded-full"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.a>
            </motion.div>
        </section>
    )
}
