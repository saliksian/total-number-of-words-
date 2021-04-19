let string = "I love to eat Biryani with and without salad";
let str = string.trim(); // trimwill eliminate white spaces from start and end.

var reg = /\W+/; // regular expression which take metacharacters from A-Z && a-z && 0-9 and eleminates others

let words = str.split(reg); // here we split the "str" with "reg" 

console.log("Number of words in string: "+words.length);





