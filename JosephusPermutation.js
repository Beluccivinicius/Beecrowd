function josephus(items, k) {
  let index = k - 1;
  let newArr = [];

  for (let i = 0; items.length > 0; i++) {
    let death = items.splice(index, 1);

    if (death.length < 1) {
      index = index - items.length;
      continue;
    }

    newArr.push(death[0]);
    index = index + k - 1;
  }

  return newArr;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
