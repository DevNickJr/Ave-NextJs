/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/aves-defbd.appspot.com/**',
          },
        ],
      },

}

module.exports = nextConfig
