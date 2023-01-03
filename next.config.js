/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
      mongodburl: "Your MongoDB connection String",
  }
};

module.exports = nextConfig
