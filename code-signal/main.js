function addBorder(picture) {
  const bordered = picture.map(string => {
    return `*${string}*`;
  });
  const ends = '*'.repeat(bordered[0].length);
  bordered.unshift(ends);
  bordered.push(ends);
  return bordered;
}

addBorder([]);

function alternatingSums(a) {
  const sums = a.reduce((teams, person, index) => {
    if (index % 2) {
      teams[1] += person;
    } else {
      teams[0] += person;
    }
    return teams;
  }, [0, 0]);
  return sums;
}

alternatingSums([]);

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
