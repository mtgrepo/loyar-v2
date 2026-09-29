// app/page.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/page-wrapper";
import Hero from "@/components/section/hero";       // Server component
import About from "@/components/section/about";     // Server component
import Stats from "@/components/section/stats";     // Server component
import Service from "@/components/section/service"; // Server component
import Blog from "@/components/section/blog";       // Server component
import Reviews from "@/components/section/review";  // Server component
import Legal from "@/components/section/legal";     // Server component
import BookingClient from "@/components/section/booking"; // Client component
import ContactClient from "@/components/section/contact"; // Client component
import { SITE_URL, SITE_DESCRIPTION_EN, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Loyar Myanmar — Myanmar Taxi & Ride-Hailing App | Thwar, Sar, Poh, Airport",
  description: SITE_DESCRIPTION_EN,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Loyar Myanmar — Myanmar Taxi & Ride-Hailing App",
    description: SITE_DESCRIPTION_EN,
    url: SITE_URL,
    images: [absoluteUrl("/images/loyar-logo.jpg")],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Loyar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loyar (Loyar Myanmar / Loyar Taxi, လိုရာ) is a Myanmar ride-hailing and taxi app. Book Loyar Thwar, Loyar Sar, Loyar Poh and Airport transfer rides in Yangon and across Myanmar.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a Loyar taxi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download the LOYAR app or book via loyar.com.mm. Choose Thwar, Sar, Poh or Airport Checkin, set pickup and destination, and a verified driver will pick you up.",
      },
    },
    {
      "@type": "Question",
      name: "Is Loyar safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Loyar uses verified professional drivers, real-time ride tracking, insured rides and 24/7 customer support.",
      },
    },
    {
      "@type": "Question",
      name: "Does Loyar do airport transfers in Yangon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Airport Checkin provides Yangon airport transfers with flight tracking, meet & greet and on-time pickup.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is Loyar?",
    a: "Loyar (Loyar Myanmar / Loyar Taxi, လိုရာ) is Myanmar's trusted ride-hailing and taxi app — book Thwar, Sar, Poh and Airport transfers in Yangon and across Myanmar.",
  },
  {
    q: "How do I book a Loyar taxi?",
    a: "Download the LOYAR app or book on this website. Pick Thwar, Sar, Poh or Airport Checkin, set your pickup and destination, and a verified driver arrives in minutes.",
  },
  {
    q: "Is Loyar safe?",
    a: "Yes — verified drivers, real-time tracking, insured rides and 24/7 support in Myanmar.",
  },
  {
    q: "Does Loyar do Yangon airport transfers?",
    a: "Yes — Airport Checkin offers flight tracking, meet & greet and fixed transparent pricing.",
  },
];

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* SEO: server-rendered H1 + intro for Google & AI search (visually hidden heading keeps design) */}
      <h1 className="sr-only">
        Loyar Myanmar — Taxi &amp; Ride-Hailing App in Myanmar (လိုရာ): Loyar Thwar, Loyar Sar, Loyar Poh &amp; Airport Transfers
      </h1>
      <p className="sr-only">
        Loyar (Loyar Myanmar / Loyar Taxi) is Myanmar&apos;s trusted ride-hailing
        service in Yangon and across Myanmar. Book premium Thwar, affordable Sar,
        family Poh and Airport Checkin rides with verified drivers, transparent
        pricing and 24/7 support. Learn more: /about and /services.
      </p>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-0 overflow-hidden max-sm:py-0">
        <Hero />
      </section>

      {/* Stats Section */}
      <SectionWrapper className="py-16 bg-foreground text-background">
        <Stats />
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="about">
        <About />
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-secondary" id="services">
        <Service />
      </SectionWrapper>

      {/* Blog Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="blog">
        <Blog />
      </SectionWrapper>

      {/* Reviews Section */}
      {/* <SectionWrapper className="py-20 lg:py-28 bg-secondary" id="reviews">
        <Reviews />
      </SectionWrapper> */}

      {/* Legal & Policies Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-secondary" id="legal">
        <Legal />
      </SectionWrapper>

      {/* Book a Ride CTA (Interactive, Client Component) */}
      <SectionWrapper className="py-20 lg:py-28 bg-primary" id="book">
        <BookingClient />
      </SectionWrapper>

      {/* Contact Section (Interactive, Client Component) */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="contact">
        <ContactClient />
      </SectionWrapper>

      {/* SEO: crawlable FAQ for Google + AI answers */}
      <SectionWrapper className="py-16 bg-background" id="faq">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Loyar — Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Quick answers about Loyar Myanmar taxi &amp; ride-hailing. More on our{" "}
            <a href="/about" className="text-primary hover:underline">About Loyar</a>{" "}
            and <a href="/services" className="text-primary hover:underline">Services</a> pages.
          </p>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border border-border rounded-xl p-6 bg-secondary/30">
                <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}