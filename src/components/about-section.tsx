import { Award, Sparkles, Clock, Shield } from "lucide-react"

const features = [
    { icon: Award, title: "Premium Venue", description: "Designed for world-class events" },
    { icon: Sparkles, title: "Brand New Facilities", description: "State-of-the-art amenities throughout" },
    { icon: Clock, title: "24/7 Support", description: "Dedicated team always available" },
    { icon: Shield, title: "Your Vision, Our Priority", description: "Personalized service for every event" },
]

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-20 lg:py-32 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                        About Us
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-charcoal mb-6 text-balance">
                        A New Chapter Begins
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Utsav Convention Hall is Kadapa's newest premier venue, built to make
                        your celebrations truly unforgettable.
                    </p>
                </div>

                {/* First Block: Text Left, Image Right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
                    <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark-charcoal mb-6">
                            Architectural Marvel Meets Modern Elegance
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Our convention hall stands as a testament to architectural brilliance,
                            seamlessly blending traditional Indian design elements with contemporary
                            sophistication. Every corner tells a story of meticulous craftsmanship
                            and attention to detail.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            From the grand crystal chandeliers adorning our ballrooms to the
                            cutting-edge technology powering our conference halls, we have
                            created spaces that inspire and captivate.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.slice(0, 2).map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark-charcoal text-sm">{feature.title}</h4>
                                        <p className="text-muted-foreground text-xs">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <img
                                src="/CP_03173.JPG"
                                alt="Grand ballroom with crystal chandeliers"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gold to-warm-orange rounded-2xl -z-10" />
                    </div>
                </div>

                {/* Second Block: Image Left, Text Right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <img
                                src="/CP_03162.JPG"
                                alt="Modern conference hall"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-royal-blue to-deep-purple rounded-2xl -z-10" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark-charcoal mb-6">
                            Technology That Empowers Your Vision
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Our venues are equipped with the latest audio-visual technology,
                            including high-resolution LED walls, professional-grade sound systems,
                            and high-speed connectivity to ensure your events run flawlessly.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Whether you are hosting a global conference or an intimate celebration,
                            our technical infrastructure supports events of any scale and complexity.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.slice(2, 4).map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-royal-blue" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark-charcoal text-sm">{feature.title}</h4>
                                        <p className="text-muted-foreground text-xs">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
