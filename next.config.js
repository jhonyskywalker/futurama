module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/lab': { page: '/lab' },
      '/experience': { page: '/experience' },
    }
  },
}
