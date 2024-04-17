/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      { source: '/', destination: '/home', permanent: true },
    ]
  },
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
};

export default nextConfig;
