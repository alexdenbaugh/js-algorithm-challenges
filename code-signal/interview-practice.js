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
