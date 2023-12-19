// You probably know the "like" system from Facebook and other
//  pages. People can "like" blog posts, pictures or other
//  items. We want to create the text that should be displayed
//   next to such an item.

// Implement the function which takes an array containing
// the names of people that like an item. It must return
// the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  const isString = names.map((element) => {
    if (typeof element !== "string") return false;
  });

  if (isString.includes(false)) return "number in array";

  const response = {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  };

  return names.length > 4 ? response[4] : response[names.length];
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "saco", "cabeça"]));
