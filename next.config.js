/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        host: "localhost",
        port: "3000",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      host: "https://slownik-pwr-backend.herokuapp.com/",
      port: "80",
    },
  };
};
