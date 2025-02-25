let user: string = "mumbo";
let hasLoggedIn: boolean = true;

let num: number = 99;

let exRegex: RegExp = /foo/;

//arrays
const letters: string[] = user.split(" ") 

const myletters: Array<number> = [1,2,3]

//objs
interface Chicken {
  firstName: string;
  color: string;
}
const chicken: Chicken = { 
  firstName: "mumbo",
  color: "silver type",
}

//record define key and value types
const ids: Record<number, string> = {
  10: "a",
  20: "20"
}
console.log(chicken);

for(let i= 0; i<10; i++) {
  console.log(i); //inferred to be a number
}

[1,2,3,4].forEach(num => console.log(num)); //inferred to be a num from the array since the arr has nums

[4,5,6,7].map(num => num*2) // again infers the param and output to be a num