function firstNotRepeatingCharacter(s) {
  const u = [];
  const no = new Set();
  for (let i = 0; i < s.length; i++) {
    if (u.includes(s[i])) {
      u.splice(u.indexOf(s[i]), 1);
      if (!no.has(s[i])) {
        no.add(s[i]);
      }
    } else if (!no.has(s[i])) {
      u.push(s[i]);
    }
  }
  if (!u.length) {
    return '_';
  }
  return u[0];
}

function firstDuplicate(a) {
  const b = new Set();
  for (let i = 0; i < a.length; i++) {
    if (b.has(a[i])) {
      return a[i];
    } else {
      b.add(a[i]);
    }
  }
  return -1;
}
