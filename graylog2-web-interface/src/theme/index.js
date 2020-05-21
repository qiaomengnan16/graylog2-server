// @flow strict
import colors, { type Colors } from './colors';
import breakpoints from './breakpoints';
import utils from './utils';

const theme = {
  breakpoint: {
    ...breakpoints,
  },
  colors,
  util: {
    ...utils,
  },
};

const themeModes: Array<string> = ['teinte', 'noire'];

export type ThemeInterface = {
  colors: Colors,
};

export default theme;

export {
  breakpoints as breakpoint,
  colors,
  utils as util,
  themeModes,
};
