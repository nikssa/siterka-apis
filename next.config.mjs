/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
    // domains: ['images.pexels.com', 'picsum.photos', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
