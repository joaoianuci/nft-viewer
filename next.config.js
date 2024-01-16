/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 'localhost', 'res.cloudinary.com'
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        pathname: '/.*'
      },
      {
        hostname: 'localhost',
        pathname: '/.*'
      }
    ]
  }
}

module.exports = nextConfig
