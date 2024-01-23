function getMiddle(s) {
  //other solution
  //   return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  let middle = Math.floor(s.length / 2);
  if (s.length % 2 != 0) {
    return s[middle];
  } else {
    return `${s[middle - 1]}${s[middle]}`;
  }
}

console.log(getMiddle("test"));
