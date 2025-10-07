/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Static export enable करता है
  images: {
    unoptimized: true, // optional: Netlify पर Next.js image optimizer की जरूरत नहीं
  },
};

export default nextConfig;
