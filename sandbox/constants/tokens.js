import { pxToRem } from 'sandbox/utils/px-to-relative-unit';
import rootFontSizes from './root-font-sizes';
import sizes from './sizes';

const shared = {
  spacing: {
    [sizes.default]: rootFontSizes.app,
  },
};

export default Object.freeze({
  color: {
    black: '#000',
    bodyCopy: '#eee',
    brick: '#f54c1b',
    grey: '#ccc',
    white: '#fff',
  },
  spacing: {
    [sizes.default]: pxToRem(shared.spacing.default),
    [sizes.large1x]: pxToRem(shared.spacing.default + 8),
    [sizes.large2x]: pxToRem(shared.spacing.default + 16),
    [sizes.large3x]: pxToRem(shared.spacing.default + 24),
    [sizes.small1x]: pxToRem(shared.spacing.default - 4),
    [sizes.small2x]: pxToRem(shared.spacing.default - 8),
    [sizes.small3x]: pxToRem(shared.spacing.default - 12),
  },
});
