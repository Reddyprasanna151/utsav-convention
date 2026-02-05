import { useState, useEffect } from 'react';

const slides = [
    {
        image: '/CP_03198.JPG',
        title: 'Grandeur',
        subtitle: 'Where Moments Become Memories'
    },
    {
        image: '/CP_03162.JPG',
        title: 'Elegance',
        subtitle: 'Timeless Spaces for Timeless Love'
    },
    {
        image: '/CP_03173.JPG',
        title: 'Excellence',
        subtitle: 'World-Class Corporate Events'
    }
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden bg-charcoal">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image Container with Zoom Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
                                }`}
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-charcoal/40" />
                </div>
            ))}

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                <div className="container-custom px-6">
                    <div className="overflow-hidden">
                        {slides.map((slide, index) => (
                            index === currentSlide && (
                                <div key={index} className="animate-slide-up">
                                    <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-white mb-6 drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-cream/90 text-sm md:text-base uppercase tracking-[0.3em] font-light max-w-xl mx-auto drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[2px] w-12 transition-all duration-500 ${index === currentSlide ? 'bg-white opacity-100' : 'bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-3 text-white/50 text-xs uppercase tracking-widest animate-fade-in">
                <span>Scroll</span>
                <div className="h-[1px] w-12 bg-white/30" />
            </div>
        </section>
    );
}
