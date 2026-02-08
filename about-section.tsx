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
                            Where Grand Celebrations Meet Modern Comfort
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Our wedding function hall is designed for unforgettable gatherings, with a bright,
                            spacious interior, elegant ceiling lights, and a beautifully crafted stage that
                            frames every ceremony and reception in style.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Rows of comfortable seating, rich red-and-gold décor, and a clear center aisle
                            create the perfect setting for weddings, receptions, and family functions of all sizes.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            From the welcoming entrance façade and ample parking outside to the fully air
                            conditioned hall inside, every detail is planned to keep your guests relaxed,
                            comfortable, and fully focused on your big day.
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
                                src="/CP_03173.webp"
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
                                src="/CP_03162.webp"
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
                            Premium Dining & Private Accommodations
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            A large dining hall and spacious kitchen area form the core of this venue,
                            where clean white floors and soft, warm-toned table dressings create an
                            elegant, refined setting.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Spacious bridal rooms and well-appointed guest rooms are available on-site,
                            so the couple and close family can get ready, relax, and stay overnight
                            without leaving the venue.
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
