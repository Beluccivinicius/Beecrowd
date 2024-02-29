function validBraces(braces) {
  const openBraces = ["(", "[", "{"];
  const closeBraces = [")", "]", "}"];

  const bracesNeddToClose = [];
  for (let i = 0; i < braces.length; i++) {
    if (openBraces.includes(braces[i])) {
      bracesNeddToClose.push(braces[i]);
      continue;
    }

    const lastBraces = openBraces.indexOf(
      bracesNeddToClose[bracesNeddToClose.length - 1]
    );

    const lastCloseBraces = closeBraces.indexOf(braces[i]);

    if (lastBraces === lastCloseBraces) {
      bracesNeddToClose.pop();
    }
  }

  if (bracesNeddToClose.length != 0) {
    return false;
  } else {
    return true;
  }
}

console.log(validBraces("(((({{"));
