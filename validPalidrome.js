//leetcode.com/problems/valid-palindrome/submissions/1189795678/

//Velocidade 56ms
var isPalindrome = function (s) {
  const takeOutNonAlphanumeric = s.match(/[a-zA-Z0-9]/g);

  if (takeOutNonAlphanumeric == null) return true;

  let makeArray = takeOutNonAlphanumeric.join("").toLowerCase().split("");

  let left = 0;
  let right = makeArray.length - 1;

  for (let i = 0; i < makeArray.length / 2; i++) {
    if (makeArray[left] != makeArray[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("0P"));
