// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces
// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }

// Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }

function checkPassword(password) {
  let reasons = [];
  let length = password.length;

  let hasUppercase = false;
  let hasNumber = false;
  let hasSpace = password.includes(" ");

  for (let i = 0; i < length; i++) {
    let character = password[i];
    if (character >= "0" && character <= "9") {
      hasNumber = true;
    }
    if (character >= "A" && character <= "Z") {
      hasUppercase = true;
    }
  }
  if (length < 8) {
    reasons.push("Missing length");
  }
  if (!hasNumber) {
    reasons.push("Missing number");
  }
  if (!hasUppercase) {
    reasons.push("Missing Uppercase");
  }
  if (hasSpace) {
    reasons.push("Space found");
  }
  let isValid = reasons.length == 0;
  return {
    valid: isValid,
    reasons,
  };
}

const output = "helloWorld1";
console.log(checkPassword(output));
console.log(checkPassword("hellO123"));
