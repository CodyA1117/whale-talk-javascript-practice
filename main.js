let input = "Hello world, thanks you for the fish";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  // console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    //
    if (input[i] === vowels[j]) {
      console.log(input[i]);
      resultArray.push(input[i]);
      // console.log(resultArray);
    }
  }

}


console.log(resultArray);
let resultString = resultArray.join("");
resultString = resultString.toUpperCase();
console.log(resultString);
