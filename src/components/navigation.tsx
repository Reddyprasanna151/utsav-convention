import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
]

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src="/UTSAV Logo.webp"
                                alt="Utsav Convention Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="hidden sm:block">
                                <span className={`font-serif text-xl font-bold ${isScrolled ? "text-royal-blue" : "text-white"}`}>
                                    Utsav
                                </span>
                                <span className={`font-serif text-xl ${isScrolled ? "text-gold" : "text-gold"}`}>
                                    {" "}Convention
                                </span>
                            </div>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className={`relative font-medium text-sm tracking-wide transition-colors ${isScrolled ? "text-dark-charcoal hover:text-royal-blue" : "text-white/90 hover:text-white"
                                        }`}
                                    whileHover={{ y: -2 }}
                                >
                                    {item.label}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-gold to-warm-orange text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-gold/30 transition-shadow"
                                >
                                    <a href="#contact">Book Now</a>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className={`w-6 h-6 ${isScrolled ? "text-dark-charcoal" : "text-white"}`} />
                            ) : (
                                <Menu className={`w-6 h-6 ${isScrolled ? "text-dark-charcoal" : "text-white"}`} />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-6 border-b">
                                    <span className="font-serif text-xl font-bold text-royal-blue">Menu</span>
                                    <button
                                        type="button"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6 text-dark-charcoal" />
                                    </button>
                                </div>
                                <nav className="flex-1 py-6">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="block px-6 py-4 text-lg font-medium text-dark-charcoal hover:bg-soft-gray hover:text-royal-blue transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </nav>
                                <div className="p-6 border-t">
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-gold to-warm-orange text-white font-semibold py-3 rounded-full"
                                    >
                                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                            Book Now
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
