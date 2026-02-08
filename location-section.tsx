import { MapPin, Navigation, Train, Plane, Clock, Phone } from "lucide-react"
import { Button } from "./ui/button"

const nearbyLandmarks = [
    { name: "Kadapa Railway Station", distance: "3 km", time: "8 mins", icon: Train },
    { name: "Kadapa Airport", distance: "12 km", time: "20 mins", icon: Plane },
    { name: "Kadapa Bus Station", distance: "2 km", time: "5 mins", icon: Navigation },
]

export function LocationSection() {
    return (
        <section
            id="location"
            className="py-16 sm:py-20 lg:py-32 bg-soft-gray"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                        Location
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal mb-4 sm:mb-6 text-balance">
                        Strategically Located
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Easily accessible from all major transportation hubs
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Map */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d78.851902!3d14.432280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzU2LjIiTiA3OMKwNTEnMDYuOCJF!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Utsav Convention Hall Kadapa Location"
                            className="absolute inset-0"
                        />
                        {/* Map Overlay */}
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark-charcoal text-sm">Utsav Convention Hall</p>
                                        <p className="text-muted-foreground text-xs">Kadapa, Andhra Pradesh</p>
                                    </div>
                                </div>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-royal-blue hover:bg-royal-blue/90 text-white w-full sm:w-auto"
                                >
                                    <a
                                        href="https://www.google.com/maps?q=14.432280,78.851902"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Get Directions
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        {/* Address Card */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                            <h3 className="font-semibold text-dark-charcoal text-lg mb-4">Visit Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground text-sm">
                                        Utsav Convention Hall<br />
                                        Kadapa, Andhra Pradesh, India
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                                    <a href="tel:+919966229292" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                                        +91 9966229292
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                                    <p className="text-muted-foreground text-sm">
                                        Open Daily: 9 AM - 9 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Nearby Landmarks */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                            <h3 className="font-semibold text-dark-charcoal text-lg mb-4">Nearby Landmarks</h3>
                            <div className="space-y-3">
                                {nearbyLandmarks.map((landmark) => (
                                    <div key={landmark.name} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <landmark.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                                            <span className="text-dark-charcoal text-sm">{landmark.name}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-dark-charcoal text-sm font-medium">{landmark.distance}</p>
                                            <p className="text-muted-foreground text-xs">{landmark.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
