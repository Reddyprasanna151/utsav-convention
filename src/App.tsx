import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { AmenitiesSection } from "./components/amenities-section"
import { GallerySection } from "./components/gallery-section"
import { LocationSection } from "./components/location-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"
import { WhatsAppButton } from "./components/whatsapp-button"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

