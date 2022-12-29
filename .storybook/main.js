module.exports = {
  stories: [
    '../src/**/**/introduction.stories.mdx',
    '../src/**/*.stories.@(ts|tsx|js|jsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};

