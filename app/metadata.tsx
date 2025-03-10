import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Toy Fair",
  description:
    "The Toy Fair is the leading trade show for toy and gift industry.",


  openGraph: {
    type: "website",
    url: "https://www.thetoyfair.eu",
    title: "The Toy Fair",
    description:
      "The Toy Fair is the leading trade show for toy and gift industry.",
    siteName: "The Toy Fair",

    images: [
      {
        url: "/images/logo_meta.png",
        width: 150,
        height: 60,
        alt: "The Toy Fair Logo",

      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Toy Fair",
    description:
      "The Toy Fair is the leading trade show for toy and gift industry.",
    images: ["/images/logo_meta.png"],

  },
};