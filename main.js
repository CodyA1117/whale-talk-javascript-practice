let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        // Double 'e' and 'u'
        if (input[i] === 'e' || input[i] === 'u') {
          resultArray.push(input[i]);
        }
        resultArray.push(input[i]);
      }
    }
  }
      // console.log(resultArray);



console.log(resultArray);
let resultString = resultArray.join("");
resultString = resultString.toUpperCase();
console.log(resultString);
