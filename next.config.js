/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['images-eu.ssl-images-amazon.com']
  }
}

module.exports = nextConfig
