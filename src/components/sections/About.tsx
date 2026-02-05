import { Reveal } from '../ui/Reveal';

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-cream text-charcoal overflow-hidden">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 md:order-1">
                        <Reveal direction="right">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                                <img
                                    src="/CP_03173.JPG"
                                    alt="Utsav Convention Interior"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                                />
                                <div className="absolute inset-0 border border-charcoal/5 pointer-events-none" />
                            </div>
                        </Reveal>
                        {/* Decoration */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-gold/30 rounded-full hidden md:block" />
                    </div>

                    {/* Text Side */}
                    <div className="order-1 md:order-2">
                        <Reveal>
                            <h4 className="text-gold text-xs uppercase tracking-[0.3em] mb-6">Since 1999</h4>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                                Crafting <span className="italic text-charcoal-light">memorable</span> experiences.
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-charcoal/70 text-lg font-light leading-relaxed mb-8 max-w-md">
                                Utsav Convention is more than just a venue; it is a canvas for your grandest visions.
                                For over two decades, we have defined the art of celebration in Mumbai, offering
                                spaces that blend traditional elegance with modern sophistication.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex gap-12 border-t border-charcoal/10 pt-8">
                                <div>
                                    <div className="font-serif text-3xl text-gold mb-1">25+</div>
                                    <div className="text-xs uppercase tracking-widest text-charcoal/50">Years</div>
                                </div>
                                <div>
                                    <div className="font-serif text-3xl text-gold mb-1">5000+</div>
                                    <div className="text-xs uppercase tracking-widest text-charcoal/50">Events</div>
                                </div>
                                <div>
                                    <div className="font-serif text-3xl text-gold mb-1">100%</div>
                                    <div className="text-xs uppercase tracking-widest text-charcoal/50">Excellence</div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
