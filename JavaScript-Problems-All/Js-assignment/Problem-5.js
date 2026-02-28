function analyzeText(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }
  const array = str.split(" ");
  let longwords = array[0];
  for (let word of array) {
    if (word.length > longwords.length) {
      longwords = word;
    }
  }

  let token = 0;
  const tokenArray = str.split("");
  for (let t of tokenArray) {
    if (t !== " ") {
      token++;
    }
  }

  return {
    longwords,
    token,
  };
}
console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText(" "));
