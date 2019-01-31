export function getTextWidth(text, selector) {
  const element = document && document.querySelector(selector);
  if (element) {
    element.textContent = text;
    return element.clientWidth || element.offsetWidth;
  }
  return 0;
}

export function shouldUpdateValueLen(newLength) {
  const textField = document.querySelector('div.text-field');
  const width = textField.clientWidth;
  if (newLength >= width) return width;
  return newLength;
}

export function buildSelectOptions(arr = []) {
  if (Array.isArray(arr)) {
    return arr.map(value => ({ label: value, value }));
  }
  return arr;
}

export function capitalizeFirstLetter(letter) {
  if (typeof letter === 'string') {
    const firstLetter = letter.slice(0, 1);
    return `${firstLetter.toUpperCase()}${letter.slice(1).toLowerCase()}`;
  }
  return letter;
}
