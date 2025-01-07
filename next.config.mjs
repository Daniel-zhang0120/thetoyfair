/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'fastly.picsum.photos',
      'images.unsplash.com',
      'awsbrandbucket.s3.eu-north-1.amazonaws.com',
      'awsbrandbucket.s3.amazonaws.com',
      'plus.unsplash.com'
    ],
  },
};

export default nextConfig; 