import rootFontSizes from 'sandbox/constants/root-font-sizes';

const pxToRelativeUnit = (px, unit, root) =>
  `${Number((px / root).toFixed(2))}${unit}`;

export const pxToEm = px => pxToRelativeUnit(px, 'em', rootFontSizes.browser);
export const pxToRem = px => pxToRelativeUnit(px, 'rem', rootFontSizes.app);
