function chooseBestSum(t, k, ls) {
  const diference = k;
  const oi = ls.reduce((acc, curr) => {
    if (acc + curr < t) {
      return acc + curr;
    }
  }, 0);

  return oi;
}

let ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts));
