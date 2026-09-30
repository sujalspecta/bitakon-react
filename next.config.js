/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: ["./node_modules"],
    silenceDeprecations: [
      "import",
      "global-builtin",
      "color-functions",
      "if-function",
    ],
  },
};

module.exports = nextConfig;
