const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  hasCovid: false,
};

const people = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];

function find(arr) {
  const results = [];
  for (const person of arr) {
    if (person.isSocialDistancing === false) {
      for (const friend of person.friends) {
        if (friend.hasCovid && friend.isSocialDistancing === false) {
          results.push(`${person.firstName} ${person.lastName}`);
          break; //no dupes
        }
      }
    }
  }
  console.log(results);
  return results;
}

function find2(arr) {
  return arr
    .filter(
      person =>
        person.isSocialDistancing === false &&
        person.friends.filter(
          friend => friend.isSocialDistancing === false && friend.hasCovid
        )
    )
    .map(person => `${person.firstName} ${person.lastName}`);
}

find(people);

console.log(find2(people));
