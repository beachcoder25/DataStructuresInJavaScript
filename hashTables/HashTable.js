class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key){
      let hash = 0;
      for (let i=0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
  
    set(key, value){
      let address = this._hash(key);
      if(!this.data[address]){
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      //console.log(`set: ${this.data[address][0][1]}`);
      return this.data;
    }
  
    get(key){
      let address = this._hash(key);
      let currentBucket = this.data[address];
      for(let i=0; i < currentBucket.length; i++){
  
        if(currentBucket[i][0]){
          console.log(`get: ${currentBucket[i][1]}`);
          return currentBucket[i][1];
        }
      }
      return undefined;
    }
  
    keys(){
      let retArray = [];
      for(let i=0; i < this.data.length; i++){
        let currElement = this.data[i];
        if(currElement){
          for(let j=0; j < currElement.length; j++){
            retArray.push(currElement[j][0]);
          }
        }
      }
      console.log(this.data)
      console.log(retArray);
      return retArray;
    }
  }
    
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  myHashTable.set('apples', 54);
  myHashTable.set('oranges', 7);
  console.log(myHashTable.get('grapes'));
  myHashTable.keys();
  