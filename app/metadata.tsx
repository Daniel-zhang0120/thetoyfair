import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gift Fair USA",
  description: "The Gift Fair USA is the leading trade show for gift and home decor industry professionals.",
  icons: {
    icon: "/images/Logo_small.png",
    apple: "/images/Logo_small.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.thegiftfair.us",
    title: "The Gift Fair USA",
    description: "The Gift Fair USA is the leading trade show for gift and home decor industry professionals.",
    siteName: "The Gift Fair USA",
    images: [{
      url: "/images/Logo_small.png",
      width: 150,
      height: 60,
      alt: "The Gift Fair USA Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gift Fair USA",
    description: "The Gift Fair USA is the leading trade show for gift and home decor industry professionals.",
    images: ["/images/Logo_small.png"],
  },
}; 