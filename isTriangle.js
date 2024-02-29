function isTriangle(a, b, c) {
  //a + b == c > a + b
  //b + c == a > b + c
  //a + c == b > a + c
  console.log(c > a + b);
  if (c > a + b) {
    if (a > b + c) {
      if (b > a + c) {
        return true;
      }
    }
  }
  return false;
}

console.log(isTriangle(2, 2, 5));
