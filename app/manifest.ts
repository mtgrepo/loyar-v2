import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Loyar Myanmar — Taxi & Ride-Hailing",
    short_name: "Loyar",
    description:
      "Loyar (လိုရာ) — Myanmar's trusted taxi & ride-hailing app. Book Loyar Thwar, Sar, Poh and Airport transfers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F5B301",
    icons: [
      {
        src: "/images/loyar_logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
