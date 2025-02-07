import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The toy fair",
  description: "The toy fair is the leading trade show for toys and gifts.",
  icons: {
    icon: "/images/Logo_small.png",

    apple: "/images/Logo_small.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.thetoyfair.eu/",
    title: "The toy fair",
    description: "The toy fair is the leading trade show for toys and gifts.",
    siteName: "The toy fair",

    images: [{
      url: "/images/Logo_small.png",
      width: 75,
      height: 30,
      alt: "The toy fair Logo"
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "The toy fair",
    description: "The toy fair is the leading trade show for toys and gifts.",
    images: ["/images/Logo_small.png"],

  },
}; 