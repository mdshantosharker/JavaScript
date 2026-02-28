function finalScore(omr) {
  let sum = 0;
  let rightMark = 0;
  let wrongMark = 0;
  let skipMark = 0;
  for (let o in omr) {
    sum += omr[o];
  }
  if (sum === 100) {
    for (let right in omr) {
      if (right === "right") {
        rightMark = omr[right];
      }
      if (right === "wrong") {
        wrongMark = omr[right] * 0.5;
      }
      if (right === "skip") {
        skipMark = 0;
      }
    }
    const totalMark = Math.round(rightMark - wrongMark + skipMark);
    return totalMark;
  } else {
    return "Invalid";
  }
}
console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore("!@#"));
console.log(finalScore(["Raj"]));
