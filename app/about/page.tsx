import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_URL, SITE_DESCRIPTION_EN, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What is Loyar? Myanmar Taxi & Ride-Hailing App",
  description:
    "Loyar (လိုရာ, Loyar Myanmar) is Myanmar's trusted ride-hailing and taxi app — Loyar Thwar, Loyar Sar, Loyar Poh and Airport transfers in Yangon & across Myanmar. Safe, transparent pricing, 24/7.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "What is Loyar? Myanmar Taxi & Ride-Hailing App",
    description: SITE_DESCRIPTION_EN,
    url: `${SITE_URL}/about`,
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
        text: "Loyar (Loyar Myanmar / Loyar Taxi, လိုရာ) is a Myanmar ride-hailing and taxi service. Passengers book rides via the LOYAR app or website; verified drivers provide the transport across Yangon and Myanmar.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Loyar offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loyar Thwar (premium business rides), Loyar Sar (affordable shared rides), Loyar Poh (family-friendly spacious rides), and Airport Checkin (airport transfers with flight tracking).",
      },
    },
    {
      "@type": "Question",
      name: "Where does Loyar operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loyar operates in Yangon, Myanmar, expanding across Myanmar. Headquarters: No.A3, Kabar Aye Villa, Mayangone Township, Yangon.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Loyar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email info@loyar.com.mm (support@loyarmyanmar.com), phone +95 9 665 33338, or Facebook facebook.com/LoyarMM.",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <article className="pt-28 pb-16 container mx-auto px-4 lg:px-8 max-w-4xl">
        <p className="text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:text-primary">Home</Link> / About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          What is Loyar? Myanmar&apos;s Trusted Taxi &amp; Ride-Hailing App
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          <strong className="text-foreground">Loyar</strong> (Loyar Myanmar /
          Loyar Taxi, မြန်မာလို <strong className="text-foreground">လိုရာ</strong>)
          is a Myanmar-built ride-hailing and taxi platform. Passengers book
          rides through the LOYAR app or website, and verified professional
          drivers provide safe, reliable transport — from daily commutes in
          Yangon to airport transfers.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Founded in 2020 in Yangon, Loyar connects thousands of riders with
          professional drivers every day, with transparent pricing, real-time
          tracking, and 24/7 customer support.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Loyar services at a glance</h2>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Loyar Thwar</strong> — premium rides for business professionals.</li>
          <li><strong className="text-foreground">Loyar Sar</strong> — affordable shared rides for daily commuters.</li>
          <li><strong className="text-foreground">Loyar Poh</strong> — spacious family-friendly rides with luggage space.</li>
          <li><strong className="text-foreground">Airport Checkin</strong> — hassle-free airport transfers with flight tracking.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">လိုရာ (Loyar) ဆိုတာဘာလဲ?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          လိုရာ သည် မြန်မာနိုင်ငံအတွက် ဖန်တီးထားသော ride-hailing / taxi
          App ဖြစ်သည်။ ခရီးသည်များက App သို့မဟုတ် website မှတစ်ဆင့် ကားဘိုကင်လုပ်နိုင်ပြီး၊
          စိစစ်ပြီးသား ယာဉ်မောင်းများက လုံခြုံစိတ်ချရသော ခရီးစဉ်များ ပြေးဆွဲပေးသည်။
          ရန်ကုန်မြို့တွင်း နေ့စဉ်ခရီးများ၊ လေဆိပ်ကြိုပို့များအပါအဝင် ဈေးနှုန်းပွင့်လင်းစွာ၊
          24/7 အကူအညီဖြင့် စီးနင်းနိုင်ပါသည်။
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Contact Loyar</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>Email: <a className="text-primary hover:underline" href="mailto:info@loyar.com.mm">info@loyar.com.mm</a></li>
          <li>Support: <a className="text-primary hover:underline" href="mailto:support@loyarmyanmar.com">support@loyarmyanmar.com</a></li>
          <li>Phone: <a className="text-primary hover:underline" href="tel:+95966533338">+95 9 665 33338</a></li>
          <li>Address: No.A3, Kabar Aye Villa, Mayangone Township, Yangon, Myanmar</li>
        </ul>

        <div className="mt-10 flex gap-4">
          <Link href="/services" className="text-primary hover:underline font-medium">View Loyar services →</Link>
          <Link href="/#book" className="text-primary hover:underline font-medium">Book a ride →</Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
