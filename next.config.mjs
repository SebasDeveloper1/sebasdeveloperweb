/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-stats-eta-livid-88.vercel.app' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'static.platzi.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
};

export default nextConfig;
