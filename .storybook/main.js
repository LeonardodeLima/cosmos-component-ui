const path = require('path');

module.exports = {
  stories: [
    '../src/**/**/introduction.stories.mdx',
    '../src/**/*.stories.@(ts|tsx|js|jsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // Aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tokens': path.resolve(__dirname, '../src/tokens/index.ts'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@icons': path.resolve(__dirname, '../src/icons'),
    };

    // Fix 1: processa .mjs como módulo JS normal
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // Fix 2: transpila motion e framer-motion com babel para Webpack 4
    // Webpack 4 não entende optional chaining (?.) nativo nos node_modules
    config.module.rules.push({
      test: /\.(js|mjs)$/,
      include: [
        /node_modules\/motion/,
        /node_modules\/framer-motion/,
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-optional-chaining'],
        },
      },
    });

    return config;
  },
};