const duplicateEncode = (string) => {
  const stringLowerCase = string.toLowerCase();
  const arrayString = stringLowerCase.split("");

  const manyTimes = arrayString.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const newArray = arrayString.map((n) => {
    if (manyTimes[n] > 1) {
      return ")";
    } else {
      return "(";
    }
  });

  return newArray.join("");
};

console.log(duplicateEncode("SDfjsnf" + 1));
