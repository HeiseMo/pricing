module.exports = {
  reactStrictMode: true,
}

const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'pages/svg'),
  webpack(config, options) {
    return config
  }
})