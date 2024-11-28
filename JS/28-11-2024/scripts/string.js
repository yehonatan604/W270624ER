const sentence = 'The quick brown fox jumps brown the lazy dog.';

console.log(sentence.length); // number of characters

console.log(sentence.toUpperCase()); // all uppercase

console.log(sentence.toLowerCase()); // all lowercase

console.log(sentence.indexOf('brown')); // index of the word 'brown'

console.log(sentence.lastIndexOf('brown')); // last index of the word 'brown'

console.log("slice: ", sentence.slice(4, 11)); // slice from index 4 to 10 // quick b

console.log(sentence);

console.log("substring: ", sentence.substring(4, 11)); // substring from index 4 to 10 // quick b


const name1 = "Gilad";
const name2 = "Israel";

// hello Gilad & israel   

//console.log("hello " + x + " & " + y);

console.log(`Hello ${name1} & ${name2}`); // string literals


console.log(sentence.replace('quick', 'slow')); // replace 'quick' with 'slow'

console.log(sentence.replaceAll('brown', 'red')); // replace all 'brown' with 'red'

