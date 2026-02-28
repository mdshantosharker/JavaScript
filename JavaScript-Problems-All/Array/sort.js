const persons = ["rakib", "nokib", "sakib", "akib", "dakib"];

const sortedPersons = persons.sort();
console.log(sortedPersons);

const numbers = [4, 6, 3, 7, 2];
console.log(numbers.sort());

const numbers2 = [4, 6, 13, 17, 2, 1];
console.log(
  numbers2.sort(function (a, b) {
    return a - b;
  }),
);
