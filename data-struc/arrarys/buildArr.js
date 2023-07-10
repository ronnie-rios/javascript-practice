class myArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    //add thins to arr
    push(item) {
        //data at that length = the item passedin
        this.data[this.length] = item;
        //increment the length
        this.length++
        return this.length
    }
    //remove from an arr
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    delete(index) {
        const item = this.data[index]
        this.shiftItems(index) 
    }
    shiftItems(index) {
        //start at index
        for(let i= index; i < this.length -1; i++) {
            //take each item, shift the items to the left by 1
            this.data[i] = this.data[i+1]
        }
        //delete last item (since it shifts, the value still at original index)
        delete this.data[this.length-1]
        this.length--;
    }
}

//instantiation of the class
const newArr = new myArray()
newArr.push('hi')
newArr.push('hello')
console.log(newArr);
newArr.pop()
console.log(newArr);