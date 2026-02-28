const collage = {
  name: "vnc",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(collage.unique.color);
console.log(collage.unique.result.gpa);
collage.unique.result.gpa = "top top";
console.log(collage.unique.result.gpa);
console.log(collage["unique"]["result"]["gpa"]);

delete collage.name;
console.log(collage);
