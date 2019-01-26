const rootStyle = getComputedStyle(document.body);
export const FONT_FAMILY = rootStyle.getPropertyValue('--font-family');
export const INPUT_FONT_SIZE = rootStyle.getPropertyValue('--input-font-size');
export const INPUT_FONT_WEIGHT = rootStyle.getPropertyValue('--input-font-weight');
