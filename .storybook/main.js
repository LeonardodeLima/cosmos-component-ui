const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // Aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tokens':     path.resolve(__dirname, '../src/tokens/index.ts'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@icons':      path.resolve(__dirname, '../src/icons'),
    };

    // Transpile TypeScript and JSX
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/plugin-proposal-optional-chaining'],
        },
      },
    });

    // Transpila motion e framer-motion com babel (optional chaining)
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
