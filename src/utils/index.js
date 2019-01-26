export function getTextWidth(text, selector) {
  const element = document && document.querySelector(selector);
  if (element) {
    element.innerHTML = text;
    return Math.floor(element.clientWidth);
  }
  return 0;
}

export function shouldUpdateValueLen(newLength) {
  const textField = document.querySelector('div.text-field');
  const width = textField.clientWidth;
  if (newLength >= width) return width;
  return newLength;
}
