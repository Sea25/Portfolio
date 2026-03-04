/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // for static export if needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig