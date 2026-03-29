import {
  ChevronRight,
  Clock,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

// --- Scroll reveal hook ---
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    const els = document.querySelectorAll(".fade-in-up, .fade-in");
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// --- Smooth scroll helper ---
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// --- Navbar ---
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "SERVICES", id: "services" },
    { label: "ABOUT", id: "about" },
    { label: "GALLERY", id: "gallery" },
    { label: "PRICING", id: "pricing" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-xs border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand lockup */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center leading-none select-none"
          data-ocid="nav.link"
        >
          <span
            className={`font-serif text-xl font-bold tracking-[0.18em] uppercase ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            GLOWCRAFT
          </span>
          <span
            className={`font-sans text-[10px] tracking-[0.3em] uppercase mt-0.5 ${
              scrolled ? "text-muted-foreground" : "text-white/80"
            }`}
          >
            Studio
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-ocid="nav.link"
              className={`font-sans text-xs font-medium tracking-[0.15em] uppercase hover:opacity-70 transition-opacity ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/919999999999?text=Hi%20GlowCraft%20Studio!%20I%27d%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2.5 border transition-all ${
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-white"
                : "border-white text-white hover:bg-white hover:text-foreground"
            }`}
          >
            BOOK ONLINE
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMenuOpen((v) => !v)}
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setMenuOpen(false);
                }}
                data-ocid="nav.link"
                className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-left text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919999999999?text=Hi%20GlowCraft%20Studio!%20I%27d%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.primary_button"
              className="font-sans text-xs font-semibold tracking-[0.12em] uppercase px-5 py-3 border border-foreground text-foreground text-center hover:bg-foreground hover:text-white transition-all"
            >
              BOOK ONLINE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// --- Hero Section ---
function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      <img
        src="/assets/generated/hero-salon.dim_1400x800.jpg"
        alt="GlowCraft Studio interior"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark gradient overlay, stronger on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="max-w-lg">
          <p className="fade-in font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-4">
            Est. 2018 &middot; New Delhi
          </p>
          <h1
            className="fade-in font-serif font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
          >
            Your Beauty,
            <br />
            Our Passion
          </h1>
          <p className="fade-in stagger-1 font-sans text-white/80 text-base md:text-lg mb-10 leading-relaxed">
            Premium salon experience for modern lifestyles.
            <br className="hidden md:block" />
            Aao, apni beauty journey shuru karo. ✨
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%20GlowCraft%20Studio!%20I%27d%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="fade-in stagger-2 inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide bg-white text-foreground px-8 py-4 hover:bg-primary hover:text-foreground transition-all duration-300"
          >
            Book Appointment
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Services Section ---
const SERVICES = [
  {
    title: "Haircuts & Styling",
    desc: "Khubsurat baal, perfect look",
    detail:
      "From classic cuts to trending styles — our expert stylists shape your hair to suit your face and personality.",
    img: "/assets/generated/service-hair.dim_600x600.jpg",
  },
  {
    title: "Hair Coloring",
    desc: "Rang do apne sapno ka",
    detail:
      "Global colors, highlights, balayage, and more — bring your dream hair color to life with premium products.",
    img: "/assets/generated/service-color.dim_600x600.jpg",
  },
  {
    title: "Skin Care",
    desc: "Glowing skin, happy you",
    detail:
      "Customized facials, clean-ups, and de-tan treatments to reveal your natural, radiant glow.",
    img: "/assets/generated/service-skin.dim_600x600.jpg",
  },
  {
    title: "Bridal Makeup",
    desc: "Your special din, our masterpiece",
    detail:
      "Look breathtaking on your most special day. Our bridal experts craft every detail to perfection.",
    img: "/assets/generated/service-bridal.dim_600x600.jpg",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Humari Services
          </h2>
          <div className="mx-auto mt-5 w-12 h-px bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`fade-in-up stagger-${i + 1} group bg-card rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300`}
              data-ocid={`services.card.${i + 1}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-primary font-medium tracking-wide mb-3 italic">
                  {service.desc}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {service.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Gallery Section ---
const GALLERY_IMGS = Array.from(
  { length: 9 },
  (_, i) => `/assets/generated/gallery-${i + 1}.dim_600x600.jpg`,
);

function GallerySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-3">
            Our Gallery
          </h2>
          <a
            href="https://instagram.com/glowcraft.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1.5"
            data-ocid="gallery.link"
          >
            <Instagram size={14} />
            @glowcraft.studio
          </a>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {GALLERY_IMGS.map((src, i) => (
            <div
              key={src}
              className="fade-in-up relative aspect-square overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={src}
                alt={`GlowCraft studio work ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                  hovered === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <Heart className="text-white fill-white" size={28} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- About Section ---
const STATS = [
  { value: "5000+", label: "Happy Clients" },
  { value: "12+", label: "Expert Stylists" },
  { value: "5 yrs", label: "Years of Glam" },
];

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in-up relative">
            <img
              src="/assets/generated/about-team.dim_800x600.jpg"
              alt="GlowCraft Studio team"
              className="w-full object-cover rounded-sm shadow-card"
            />
            {/* Accent frame */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-primary/40 rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div className="fade-in-up stagger-2">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Apni Kahani
            </h2>
            <div className="w-12 h-px bg-primary mb-8" />
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
              2018 mein shuru hua ek sapna — ek aisa salon jahan har koi apni
              best version feel kare. GlowCraft Studio aaj New Delhi ka ek
              trusted beauty destination hai.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
              Our stylists are trained at leading institutes across India and
              internationally, bringing world-class techniques and artistry to
              every chair. We use only the finest products — Kérastase, NARS,
              MAC — because you deserve nothing less.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
              Whether it's a quick clean-up or your dream bridal look, we treat
              every client like royalty.
              <span className="text-foreground font-medium">
                {" "}
                Beauty is not a luxury — it's a lifestyle.
              </span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                  data-ocid="about.card"
                >
                  <p className="font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs tracking-wide text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Pricing Section ---
const PRICING_CATEGORIES = [
  {
    category: "Haircuts",
    emoji: "✂️",
    items: [
      { name: "Women's Cut & Style", price: "₹500+" },
      { name: "Men's Haircut", price: "₹300+" },
      { name: "Kids' Haircut", price: "₹200+" },
    ],
  },
  {
    category: "Hair Color",
    emoji: "🎨",
    items: [
      { name: "Global Color", price: "₹1,500+" },
      { name: "Highlights", price: "₹2,500+" },
      { name: "Balayage", price: "₹4,000+" },
    ],
  },
  {
    category: "Skin Care",
    emoji: "✨",
    items: [
      { name: "Facial", price: "₹800+" },
      { name: "Clean-up", price: "₹500+" },
      { name: "De-tan Treatment", price: "₹600+" },
    ],
  },
  {
    category: "Bridal",
    emoji: "👰",
    items: [
      { name: "Bridal Makeup", price: "₹8,000+" },
      { name: "Full Bridal Package", price: "₹25,000+" },
    ],
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Transparent & Simple
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Our Pricing
          </h2>
          <div className="mx-auto mt-5 w-12 h-px bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_CATEGORIES.map((cat, i) => (
            <div
              key={cat.category}
              className={`fade-in-up stagger-${i + 1} bg-white rounded-sm p-8 shadow-card hover:shadow-card-hover transition-shadow`}
              data-ocid={`pricing.card.${i + 1}`}
            >
              <div className="text-3xl mb-4">{cat.emoji}</div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-5">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-sans text-sm text-muted-foreground">
                      {item.name}
                    </span>
                    <span className="font-sans text-sm font-semibold text-foreground ml-2 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-xs text-muted-foreground mt-8">
          Prices may vary based on hair length, product used, and complexity.
          Consultation included.
        </p>
      </div>
    </section>
  );
}

// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    quote:
      "Yaar, ek dum zabardast experience tha! My hair has never looked this good. The stylists really listen to what you want — no generic suggestions, pure magic.",
    name: "Priya S.",
    location: "Delhi",
    rating: 5,
    initials: "PS",
  },
  {
    quote:
      "I came for bridal makeup and left feeling like an absolute queen. Worth every rupee! The team's attention to detail is unmatched. Highly recommend to every bride.",
    name: "Neha R.",
    location: "Noida",
    rating: 5,
    initials: "NR",
  },
  {
    quote:
      "Best salon in the city, no cap! The skin care treatment gave me that glow I always wanted. Will definitely come back — already booked my next appointment!",
    name: "Ananya M.",
    location: "Gurgaon",
    rating: 5,
    initials: "AM",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Real Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Client Love 💕
          </h2>
          <div className="mx-auto mt-5 w-12 h-px bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`fade-in-up stagger-${i + 1} bg-card rounded-sm p-8 shadow-card relative`}
              data-ocid={`testimonials.card.${i + 1}`}
            >
              <div className="absolute -top-4 left-8 w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl leading-none text-primary font-bold">
                  &#8220;
                </span>
              </div>

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }, (_, j) => (
                  <Star
                    key={`star-${t.name}-${j}`}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-sans text-xs font-semibold text-foreground">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Booking Section ---
function BookingSection() {
  return (
    <section className="py-24 bg-footer-bg">
      <div className="max-w-2xl mx-auto px-6 text-center fade-in-up">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Ready for a Change?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-5">
          Ready for Your Glow-Up?
        </h2>
        <p className="font-sans text-base text-muted-foreground mb-10">
          WhatsApp pe message karo, appointment lo — it's that simple!
          <br />
          Hum wait kar rahe hain aapka swagat karne ke liye. ✨
        </p>
        <a
          href="https://wa.me/919999999999?text=Hi%20GlowCraft%20Studio!%20I%27d%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="booking.primary_button"
          className="inline-flex items-center gap-3 font-sans font-bold text-base bg-[#25D366] text-white px-10 py-5 rounded-sm hover:bg-[#1fbe5a] transition-colors shadow-card"
        >
          <svg
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>WhatsApp</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 1.988.577 3.838 1.575 5.388L2 22l4.744-1.548A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.065-1.11l-.29-.173-3.009.981.842-3.08-.194-.316A8 8 0 1112 20z" />
          </svg>
          Book via WhatsApp 💬
        </a>
      </div>
    </section>
  );
}

// --- Contact Section ---
function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Visit Us
          </h2>
          <div className="mx-auto mt-5 w-12 h-px bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="fade-in-up space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-foreground mb-1">
                  Our Studio
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Shop No. 12, Lajpat Nagar Central Market,
                  <br />
                  New Delhi — 110024
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-foreground mb-1">
                  Call / WhatsApp
                </p>
                <a
                  href="tel:+919999999999"
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-ocid="contact.link"
                >
                  +91 99999 99999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-foreground mb-1">
                  Working Hours
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Mon – Sat: 10:00 AM – 8:00 PM
                  <br />
                  Sunday: 11:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className="fade-in-up stagger-2 rounded-sm overflow-hidden shadow-card"
            data-ocid="contact.panel"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7836!2d77.2310!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a0c0000001%3A0x0!2sLajpat+Nagar+Central+Market%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GlowCraft Studio Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-footer-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-[0.15em] uppercase text-foreground mb-2">
              GLOWCRAFT
            </h3>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Studio
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed italic">
              "Beauty is not a luxury,
              <br />
              it's a lifestyle."
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="font-sans text-sm text-muted-foreground">
                Shop No. 12, Lajpat Nagar,
                <br />
                New Delhi – 110024
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                +91 99999 99999
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                hello@glowcraftstudio.in
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["services", "gallery", "about", "pricing", "contact"].map(
                (id) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      data-ocid="footer.link"
                      className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
                    >
                      {id}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-5">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/glowcraft.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                data-ocid="footer.link"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/glowcraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                data-ocid="footer.link"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com/@glowcraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                data-ocid="footer.link"
              >
                <Youtube size={16} />
              </a>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-6 leading-relaxed">
              Follow us for daily inspo,
              <br />
              behind-the-scenes & offers. 💄
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © {year} GlowCraft Studio. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// --- App ---
export default function App() {
  useScrollReveal();

  // Trigger initial fade-ins for hero elements
  useEffect(() => {
    const timer = setTimeout(() => {
      for (const el of document.querySelectorAll(".fade-in")) {
        el.classList.add("visible");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
