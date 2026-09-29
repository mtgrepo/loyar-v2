/**
 * Central SEO config for Loyar.
 * Override with env: NEXT_PUBLIC_SITE_URL=https://loyar.com.mm
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://loyar.com.mm").replace(/\/$/, "");

export const SITE_NAME = "Loyar";
export const SITE_FULL_NAME = "Loyar Myanmar";
export const SITE_TAGLINE = "Myanmar's trusted ride-hailing & taxi service";

export const SITE_DESCRIPTION_EN =
  "Loyar (Loyar Myanmar) is Myanmar's trusted ride-hailing and taxi app. Book Loyar Thwar, Loyar Sar, Loyar Poh and Airport transfer rides in Yangon and across Myanmar — safe, reliable, transparent pricing, 24/7 support.";

export const SITE_DESCRIPTION_MY =
  "Loyar (လိုရာ) သည် မြန်မာနိုင်ငံအတွက် ယုံကြည်စိတ်ချရသော ride-hailing / taxi App ဖြစ်သည်။ Loyar Thwar, Loyar Sar, Loyar Poh နှင့် Airport ကြိုပို့ ခရီးစဉ်များကို ရန်ကုန်အပါအဝင် မြန်မာတစ်ဝန်းတွင် လုံခြုံစိတ်ချစွာ ဈေးနှုန်းပွင့်လင်းစွာဖြင့် ဘိုကင်လုပ်နိုင်ပါသည်။";

export const SITE_KEYWORDS = [
  "Loyar",
  "Loyar Myanmar",
  "Loyar Taxi",
  "လိုရာ",
  "Myanmar taxi",
  "Myanmar ride hailing",
  "Yangon taxi",
  "Yangon airport transfer",
  "Loyar Thwar",
  "Loyar Sar",
  "Loyar Poh",
  "Airport Checkin",
  "taxi app Myanmar",
  "ride booking Myanmar",
];

export const SITE_CONTACT = {
  email: "info@loyar.com.mm",
  supportEmail: "support@loyarmyanmar.com",
  phone: "+95966533338",
  phoneDisplay: "+95 9 665 33338",
  address:
    "No.A3, Kabar Aye Villa, Mayangone Township, Yangon, Myanmar, 11052",
};

export const SITE_SOCIAL = {
  facebook: "https://www.facebook.com/LoyarMM",
  youtube: "https://www.youtube.com/@LOYARMYANMAR",
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
