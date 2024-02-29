function zeros(n) {
  let quantity = 0;
  for (let i = 5; i <= n; i *= 5) {
    let quantityTimesFiveDividesN = Math.floor(n / i);

    quantity += quantityTimesFiveDividesN;
  }
  return quantity;
}

console.log(zeros(1000));
