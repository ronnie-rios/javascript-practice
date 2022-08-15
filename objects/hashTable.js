class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key, value) {
      //storing hashed data at address by hash function
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
        this.data[address].push([key,value])
      } 
      this.data[address].push([key,value])
      return this.data
    }
    get(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for (let i=0; i<currentBucket.length; i++) {
          if (currentBucket[i][0]=== key) {
            return currentBucket[i][1]
          }
        }//O(1)
        console.log(this.data);
      }
      return undefined
    }
    //grabbing from the arr
    keys() {
      const keysArr = [];
      for (let i=0;i < this.data.length; i++) {
        if (this.data[i]) {
          //array within an array cause its buckets
          keysArr.push(this.data[i][0][0])
        }
      }
      return keysArr;
    }
  }
  //given 50 shelves of memories
  const myHashTable = new HashTable(50);
  console.log(myHashTable.set('grapes', 10000))
  console.log(myHashTable.get('grapes'))
 console.log(myHashTable.set('apples', 9))
 // myHashTable.get('apples')