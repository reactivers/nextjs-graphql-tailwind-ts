/** @type {import('next').NextConfig} */
const { config } = require("dotenv");
const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;
config({
  path: `./environments/.env.${APP_ENV}`,
});
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
