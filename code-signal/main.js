// eslint-disable-next-line no-unused-vars
function arrayChange(inputArray) {
  let moves = 0;
  let difference;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      difference = inputArray[i - 1] - inputArray[i] + 1;
      moves += difference;
      inputArray[i] += difference;
    }
  }
  return moves;
}

function areSimilar(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let strike = 0;
  const swap = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (strike > 2) {
        return false;
      } else {
        strike++;
        swap.push(a[i], b[i]);
      }
    }
  }
  if (strike > 2) {
    return false;
  } else if (strike > 1 && (swap[0] === swap[3] && swap[1] === swap[2])) {
    return true;
  } else if (strike === 0) {
    return true;
  }
  return false;
}

areSimilar([1], [1]);

function addBorder(picture) {
  const bordered = picture.map(string => {
    return `*${string}*`;
  });
  const ends = '*'.repeat(bordered[0].length);
  bordered.unshift(ends);
  bordered.push(ends);
  return bordered;
}

addBorder(['a']);

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
