const students = [
  {
    firstName: "FN1",
    lastName: "LN1",
    habits: [
      "doesn't wash dishes",
      "falls asleep in lecture",
      "shows up early",
    ],
  },
  {
    firstName: "FN2",
    lastName: "LN2",
    habits: ["shows up late", "washes dishes", "helps peers"],
  },
  {
    firstName: "FN3",
    lastName: "LN3",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
  },
  {
    firstName: "FN4",
    lastName: "LN4",
    habits: ["shows up early", "helps peers", "washes dishes"],
  },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];
const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "vapes too much";
const expected3 = [];

function find(arr, target) {
    const result = []
    for(const person of arr) {
        for(const habit of person.habits) {
            if(habit === target) {
                result.push(`${person.firstName} ${person.lastName}`)
            }
        }
    }
    console.log(result);
    return result
}

function find2(arr, target) {
   return arr.filter(person => person.habits.includes(target)).map(person => `${person.firstName} ${person.lastName}`)
}

find(students, badHabit1)
console.log(find2(students, badHabit1));
find(students, badHabit2)
console.log(find2(students, badHabit2));
find(students, badHabit3)
console.log(find2(students, badHabit3));