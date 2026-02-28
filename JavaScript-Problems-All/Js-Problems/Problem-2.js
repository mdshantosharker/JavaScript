// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }

// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

// Test case 2
// Input: { ict: 90, biology: 90, chemistry: 70 }
// Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }

// ------------------ans-------------------

function analyzeMarks(marksObj) {
  let total = 0;
  let highestMark = -Infinity;
  let lowestMark = Infinity;
  let highestSubject = null;
  let lowestSubject = null;
  for (let mark in marksObj) {
    let value = marksObj[mark];
    total += value;
    if (value > highestMark) {
      highestMark = value;
      highestSubject = mark;
    }
    if (value < lowestMark) {
      lowestMark = value;
      lowestSubject = mark;
    }
  }
  const average = total / Object.keys(marksObj).length;
  return {
    total,
    average,
    highestSubject,
    lowestSubject,
  };
}
const output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(output);
