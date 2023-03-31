/** @type {import('next').NextConfig} */

const originHeader = [
  {
    key: 'Access-Control-Allow-Origin',
    value: '*'
  }
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/hello',
        headers: originHeader,
      },
    ]
  },
}

module.exports = nextConfig
