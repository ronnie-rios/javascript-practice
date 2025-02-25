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
