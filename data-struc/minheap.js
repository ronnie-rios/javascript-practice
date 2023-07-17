class MinHeap {
    constructor() {
        //init as empty arr
        this.heap = [null];
    }

    size() {
        //length of the arr
        return this.heap.length - 1;
    }

    top() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }

    insert(num) {
        this.heap.push(num);
        
        let childIndex = this.heap.length - 1;
        let parentIndex = Math.floor(childIndex / 2);
        
        while(this.heap[childIn] < this.heap[parentIn]){
            
            [this.heap[childIn], this.heap[parentIn]] = [this.heap[parentIn],this.heap[childIn]]

            childIndex = parentIndex
            parentIndex = Math.floor(childIndex / 2);
        }
        return this;
    }
}