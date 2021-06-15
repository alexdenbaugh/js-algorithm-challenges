function reverseInParentheses(inputString) {
  const regexp = /\((\w+)\)/;
  let split;
  let index;
  let string;
  let i;
  let reverseString = '';
  while (regexp.exec(inputString) || inputString.includes('()')) {
    split = regexp.exec(inputString);
    if (split) {
      string = split[1];
      index = split.index;
      for (i = 0; i < string.length; i++) {
        reverseString = reverseString + string[string.length - 1 - i];
      }
      inputString = `${inputString.slice(0, index)}${reverseString}${inputString.slice(index + reverseString.length + 2)}`;
      reverseString = '';
    }
    inputString = inputString.split('()').join('');
  }
  return inputString;
}

reverseInParentheses('()');
