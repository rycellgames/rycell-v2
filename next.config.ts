const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/rycell-v2' : '',
  images: {
    unoptimized: true,
  },
};
