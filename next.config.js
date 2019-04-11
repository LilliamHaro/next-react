
const withImages = require('next-images');

module.exports = withImages({

  inlineImageLimit: 8192,
  assetPrefix: '/test-nextjs',
    webpack(config, options) {
      return config
    },
})