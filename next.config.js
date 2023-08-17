const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_NASA_BASE_URL,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY
  }
}

module.exports = nextConfig
