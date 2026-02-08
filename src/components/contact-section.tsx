import { useState } from "react"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Exhibition",
    "Conference",
    "Birthday Party",
    "Social Gathering",
    "Other",
]

export function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        // Prepare data for Web3Forms
        const data = {
            access_key: "ee55c420-86bf-424a-b7ff-e7ac6f5f88a9",
            subject: `New Booking Inquiry from ${formData.get('name')}`,
            from_name: "Utsav Convention Website",
            to: "utsavconventionkadapa@gmail.com",
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            event_type: formData.get('eventType'),
            event_date: formData.get('eventDate'),
            guests: formData.get('guests'),
            message: formData.get('message'),
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                setIsSubmitted(true)
                form.reset()
                setTimeout(() => setIsSubmitted(false), 5000)
            } else {
                alert('Something went wrong. Please try again or call us directly.')
            }
        } catch {
            alert('Something went wrong. Please try again or call us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section
            id="contact"
            className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-royal-blue to-deep-purple text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                        Get In Touch
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                        {"Let's Create Something Extraordinary"}
                    </h2>
                    <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Ready to plan your event? Fill out the form and our team will
                        get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 rounded-xl p-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-sm sm:text-base mb-1">Phone</h3>
                                    <p className="text-white/70 text-xs sm:text-sm truncate">+91 9966229292</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 rounded-xl p-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-sm sm:text-base mb-1">Email</h3>
                                    <p className="text-white/70 text-xs sm:text-sm truncate">utsavconventionkadapa@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 rounded-xl p-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-sm sm:text-base mb-1">Address</h3>
                                    <p className="text-white/70 text-xs sm:text-sm">
                                        Kadapa, Andhra Pradesh
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 rounded-xl p-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-sm sm:text-base mb-1">Hours</h3>
                                    <p className="text-white/70 text-xs sm:text-sm">Mon - Sat: 9 AM - 9 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl"
                        >
                            {isSubmitted ? (
                                <div className="text-center py-8 sm:py-12">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-emerald" />
                                    </div>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-charcoal mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        {"We'll contact you within 24 hours."}
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-charcoal mb-5 sm:mb-6">
                                        Request a Quote
                                    </h3>

                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-dark-charcoal text-sm">Full Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                className="border-soft-gray focus:border-gold h-11 sm:h-10"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-dark-charcoal text-sm">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                required
                                                className="border-soft-gray focus:border-gold h-11 sm:h-10"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4 sm:mb-6">
                                        <Label htmlFor="email" className="text-dark-charcoal text-sm">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="border-soft-gray focus:border-gold h-11 sm:h-10"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="eventType" className="text-dark-charcoal text-sm">Event Type</Label>
                                            <select
                                                id="eventType"
                                                name="eventType"
                                                className="flex h-11 sm:h-10 w-full rounded-md border border-soft-gray bg-white px-3 py-2 text-sm text-dark-charcoal cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold appearance-none"
                                                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                                                required
                                            >
                                                <option value="">Select event type</option>
                                                {eventTypes.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="eventDate" className="text-dark-charcoal text-sm">Preferred Date</Label>
                                            <Input
                                                id="eventDate"
                                                name="eventDate"
                                                type="date"
                                                required
                                                className="border-soft-gray focus:border-gold h-11 sm:h-10"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="guests" className="text-dark-charcoal text-sm">Expected Guests</Label>
                                            <Input
                                                id="guests"
                                                name="guests"
                                                type="number"
                                                placeholder="500"
                                                required
                                                className="border-soft-gray focus:border-gold h-11 sm:h-10"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-5 sm:mb-6">
                                        <Label htmlFor="message" className="text-dark-charcoal text-sm">Additional Details</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your event..."
                                            rows={3}
                                            className="border-soft-gray focus:border-gold"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-gold to-warm-orange text-white font-semibold py-4 sm:py-3 rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all text-base disabled:opacity-70"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                                    </Button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
