import { useState, useEffect } from 'react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal font-semibold z-50">
                    UTSAV
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {['Venues', 'Gallery', 'Experience', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#inquire"
                        className="px-8 py-3 bg-charcoal text-white text-xs uppercase tracking-widest hover:bg-gold transition-colors duration-300"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-charcoal">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
