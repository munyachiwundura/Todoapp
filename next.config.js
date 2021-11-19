const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
  webpack5: true,
})
