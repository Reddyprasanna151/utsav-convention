export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-cream py-20 px-6">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-cream/10 pb-16">

                    {/* Brand */}
                    <div className="md:col-span-4">
                        <h2 className="font-serif text-4xl mb-6 text-white">Utsav Convention</h2>
                        <p className="text-white/60 font-light leading-relaxed max-w-sm">
                            Defining excellence in events since 1999. Where timeless elegance meets modern luxury.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-gold text-xs uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 font-light text-sm text-white/70">
                            <li><a href="#venues" className="hover:text-white transition-colors">Our Venues</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-gold text-xs uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4 font-light text-sm text-white/70">
                            <li>info@utsavconvention.com</li>
                            <li>+91 98765 43210</li>
                            <li className="leading-relaxed">
                                123 Grand Avenue,<br />
                                Luxury District, Mumbai,<br />
                                India 400001
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-wider">
                    <p>&copy; {currentYear} Utsav Convention. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
