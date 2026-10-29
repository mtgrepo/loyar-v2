import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Loyar Services — Thwar, Sar, Poh & Airport Transfers",
  description:
    "Explore Loyar services: Loyar Thwar premium rides, Loyar Sar shared affordable rides, Loyar Poh family rides, and Airport Checkin transfers in Yangon, Myanmar. Transparent pricing, verified drivers.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Loyar Services — Thwar, Sar, Poh & Airport Transfers",
    description:
      "Premium, shared, family and airport taxi services across Myanmar by Loyar.",
    url: `${SITE_URL}/services`,
    images: [absoluteUrl("/images/loyar-logo.jpg")],
  },
};

const services = [
  {
    id: "loyar-thwar",
    name: "Loyar Thwar",
    my: "လိုရာ သွား",
    body: "Premium ride service for business professionals. Luxury vehicles with professional drivers for important meetings and corporate travel in Yangon.",
  },
  {
    id: "loyar-sar",
    name: "Loyar Sar",
    my: "လိုရာ စား",
    body: "Affordable shared rides for daily commuters. Split the fare and travel smart across the city — the budget-friendly way to ride with Loyar.",
  },
  {
    id: "loyar-poh",
    name: "Loyar Poh",
    my: "လိုရာ ပို့",
    body: "Family-friendly rides with spacious vehicles, child seats on request and extra luggage space for family trips and group travel.",
  },
  {
    id: "airport",
    name: "Airport Checkin",
    my: "လေဆိပ် ကြိုပို့",
    body: "Hassle-free Yangon airport transfers with flight tracking and meet & greet. Never miss a flight — on-time pickup, transparent fixed pricing.",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Loyar ride services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.body,
      provider: { "@type": "Organization", name: "Loyar Myanmar", url: SITE_URL },
      areaServed: "Myanmar",
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Navbar />
      <article className="pt-28 pb-16 container mx-auto px-4 lg:px-8 max-w-4xl">
        <p className="text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:text-primary">Home</Link> / Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Loyar Services — Choose Your Perfect Ride in Myanmar
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          From daily commutes to airport transfers, Loyar (လိုရာ) has a ride
          for every occasion — all with verified drivers, real-time tracking
          and transparent pricing.
        </p>
        <div className="space-y-10">
          {services.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold mb-2">
                {s.name} <span className="text-muted-foreground font-normal text-lg">({s.my})</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 flex gap-4">
          <Link href="/about" className="text-primary hover:underline font-medium">What is Loyar? →</Link>
          <Link href="/#book" className="text-primary hover:underline font-medium">Book a ride →</Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
