function simpleStrState(initial: string): [()=> string, (v: string) => void] {
  let str: string = initial;
  return [
    ()=> str,
    (v: string) => {
      str = v
    }
  ]
};

const [str, str2] = simpleStrState("hi")

//tuples can be an arr that hold different types