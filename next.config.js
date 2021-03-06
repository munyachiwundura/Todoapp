const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    // dest: "public",
    register: true,
    sw: 'sw.js'
  },
  reactStrictMode: true,
  webpack5: true,
})
