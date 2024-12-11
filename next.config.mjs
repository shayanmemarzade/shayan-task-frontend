/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['rickandmortyapi.com'], // Add the hostname here
    }
};

export default nextConfig;
