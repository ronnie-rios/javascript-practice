//
function add(a: number, b:number): number {
  return a + b;
}

export default add;

export const addStr = (str1: string, str2: string = "default"): string => `${str1} ${str2}`;

//union type string | number
export const format = (title: string, param: string | number): string => `${title} ${param}`

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
}

export const fetchData =  (url: string): Promise<string> => Promise.resolve('data')


function intro(greeting: string, ...names:string[]): string {
  return greeting + names
}
//types are inferred at compile time not run time