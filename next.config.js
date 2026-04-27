/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Hetzner MinIO proxy
      { protocol: 'http', hostname: '46.224.200.254', port: '8090', pathname: '/blob/**' },
      { protocol: 'http', hostname: '46.224.200.254', port: '9000', pathname: '/**' },
      { protocol: 'http', hostname: '**.46.224.200.254.sslip.io', pathname: '/**' },
      { protocol: 'https', hostname: '**.46.224.200.254.sslip.io', pathname: '/**' },
      { protocol: 'https', hostname: 'singureality.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig
