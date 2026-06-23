/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
      {
        // Temporary: Stitch's AI-generated preview images, used so the
        // redesign renders immediately. Remove this entry once every
        // section below is wired to real product/brand photography.
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
