import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/song",
        destination: "/song/new-hot",
        permanent: true,
      },
      {
        source: "/playlist",
        destination: "/playlist/new-hot",
        permanent: true,
      },
      {
        source: "/video",
        destination: "/video/new-hot",
        permanent: true,
      },
      {
        source: "/top-100",
        destination: "/top-100/vietnam",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
