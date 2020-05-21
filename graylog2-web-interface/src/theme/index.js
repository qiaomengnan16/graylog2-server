// @flow strict
import colors, { type Colors } from './colors';
import breakpoints, { type Breakpoints } from './breakpoints';
import utils from './utils';

const theme = {
  breakpoints,
  colors,
  util: {
    ...utils,
  },
};

const themeModes: Array<string> = ['teinte', 'noire'];

export type ThemeInterface = {
  colors: Colors,
  breakpoints: Breakpoints,
};

export default theme;

export {
  breakpoints,
  colors,
  utils as util,
  themeModes,
};
