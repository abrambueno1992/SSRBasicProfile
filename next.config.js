const withCSS = require('@zeit/next-css');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|jp2|webp|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]',
          fallback: 'responsive-loader',
  quality: 85
        }
      }
    })

    return config
  },
  reactStrictMode: true,
}

module.exports = nextConfig
