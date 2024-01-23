function isTriangle(a, b, c) {
  //a + b == c > a + b
  //b + c == a > b + c
  //a + c == b > a + c
  console.log(c > a + b);
  if (c > a + b) {
    console.log("oi");
    if (a > b + c) {
      console.log("oi");
      if (b > a + c) {
        console.log("oi");
        return true;
      }
    }
  }
  return false;
}

console.log(isTriangle(2, 2, 5));
