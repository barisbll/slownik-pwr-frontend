/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        host: "localhost:8080",
        hostFull: "http://localhost:8080",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      host: "slownik-pwr-backend.herokuapp.com",
      hostFull: "https://slownik-pwr-backend.herokuapp.com",
    },
  };
};
