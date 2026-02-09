/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/consult',
        destination: 'https://calendar.app.google/h3527ytshYvu5XiV8',
        permanent: true,
      },
      {
        source: '/call',
        destination: 'https://calendar.app.google/h3527ytshYvu5XiV8',
        permanent: true,
      },
      {
        source: '/book',
        destination: 'https://calendar.app.google/h3527ytshYvu5XiV8',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;