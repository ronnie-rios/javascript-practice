import add from "./functions";

//define a func
export function printFile(text: string, callback: () => void): void {
	console.log(text);
	callback();
}

//mutate is a func that takes a number and returns a number
export function arrMutate(numbers: number[], mutate: (num: number) => number): number[] {
  return numbers.map(mutate);
}

//ver two defining our own type
type mutateFuncType = (v: number) => number;

export function arrMutateTwo(x: number[], mutate: mutateFuncType): number[] {
  return x.map(mutate)
}

console.log(arrMutate([1,224], (v) => v *2));

//closures

export function createAdd(num: number): (val: number) => number {
  return (val: number) => num + val;
}
type addFuncType = (val: number) => number;

export function createAdd2(num: number): addFuncType {
  return (val: number) => num + val;
}

const addOne = createAdd(1);
console.log(addOne(2));
