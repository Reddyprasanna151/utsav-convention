import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-dark-charcoal text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 lg:gap-12">
                    {/* Brand with Logo */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4 sm:mb-6">
                            <img
                                src="/UTSAV Logo.png"
                                alt="Utsav Convention Hall Logo"
                                className="h-14 sm:h-16 w-auto"
                            />
                        </div>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            {"Kadapa's premier convention destination for unforgettable events."}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-sm sm:text-base mb-4 sm:mb-6">Contact Us</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start justify-center md:justify-end gap-2 sm:gap-3">
                                <span className="text-white/60 text-xs sm:text-sm text-right">
                                    Utsav Convention Hall<br />
                                    Kadapa, Andhra Pradesh
                                </span>
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                            </li>
                            <li className="flex items-center justify-center md:justify-end gap-2 sm:gap-3">
                                <a href="tel:+919966229292" className="text-white/60 hover:text-gold transition-colors text-xs sm:text-sm">
                                    +91 9966229292
                                </a>
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                            </li>
                            <li className="flex items-center justify-center md:justify-end gap-2 sm:gap-3">
                                <a href="mailto:utsavconventionkadapa@gmail.com" className="text-white/60 hover:text-gold transition-colors text-xs sm:text-sm">
                                    utsavconventionkadapa@gmail.com
                                </a>
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <p className="text-white/40 text-xs sm:text-sm text-center">
                        © {new Date().getFullYear()} Utsav Convention Hall. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 bg-gold text-white rounded-full shadow-lg flex items-center justify-center hover:bg-warm-orange transition-colors z-40 active:scale-95"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    )
}
