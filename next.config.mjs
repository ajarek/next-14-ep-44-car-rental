/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:"www.sixt.com",
            port: '',
           
          },
        ],
      },
};

export default nextConfig;
