import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const cosmosTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Cosmos UI',
  brandUrl:   'https://github.com/LeonardodeLima/cosmos-component-ui',

  // UI chrome
  colorPrimary:   '#6c3fff', // nebula.500
  colorSecondary: '#8b6aff', // nebula.400

  // App background
  appBg:           '#060810', // stardust.1000
  appContentBg:    '#060810',
  appBorderColor:  '#242d3a', // stardust.900
  appBorderRadius: 6,

  // Sidebar
  barBg:           '#060810',
  barTextColor:    '#7a8699', // stardust.500
  barSelectedColor:'#b39dff', // nebula.300

  // Text
  textColor:        '#f7f8fa', // stardust.50
  textInverseColor: '#060810',
  textMutedColor:   '#4a5567', // stardust.700

  // Input
  inputBg:          '#131820', // stardust.950
  inputBorder:      '#3a4352', // stardust.800
  inputTextColor:   '#f7f8fa',
  inputBorderRadius: 4,
});

addons.setConfig({ theme: cosmosTheme, panelPosition: 'right' });
