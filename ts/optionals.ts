function printIng(qty: number, ing: string) {
  console.log(qty, ing);
}

interface User {
  id: number,
  info?: {
    email?: string
  }
}