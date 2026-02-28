function gonoVote(array) {
  let haCount = 0;
  let naCount = 0;
  if (Array.isArray(array)) {
    for (let a of array) {
      if (a === "ha") {
        haCount++;
      }
      if (a === "na") {
        naCount++;
      }
    }
    if (haCount > naCount) {
      return true;
    } else if (haCount === naCount) {
      return "equal";
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));
