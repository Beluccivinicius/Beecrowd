function toUnderscore(string) {
  let stringToConvert = `${string}`;
  stringToConvert = stringToConvert.replace(
    stringToConvert[0],
    stringToConvert[0].toLowerCase()
  );

  if (stringToConvert.search(/[A-Z]/g) == -1) return stringToConvert;

  do {
    const indexUpperCase = stringToConvert.search(/[A-Z]/g);

    stringToConvert = stringToConvert.replace(
      stringToConvert[indexUpperCase],
      `_${stringToConvert[indexUpperCase].toLowerCase()}`
    );
  } while (stringToConvert.search(/[A-Z]/g) != -1);

  return stringToConvert;
}

console.log(toUnderscore("AmigoEstou67Aqui"));
