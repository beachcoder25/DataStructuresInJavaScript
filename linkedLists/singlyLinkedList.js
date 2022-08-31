// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//           value: 16,
//           next: null
//         }
//     }
//   }  
// }

class Node{
    constructor(value){
      this.value = value,
      this.next = null
    }
  }
  
  class LinkedList{
    constructor(value){
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value){
      const newNode = {
          value: value,
          next: null
      };
      // head
      let currNode = this.head;
      this.tail.next = newNode; 
      this.tail = newNode;
      this.length++;
      console.log(this);
      return this;
    }
    
    prepend(value){
      const newNode = {
          value: value,
          next: null
      };
      newNode.next = this.head;    
      this.head = newNode;
      this.length++;
      // console.log(this);
      return this;
    }
  
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
      return array;
    }
  
    insert(index, value){
      if(index >= this.length){
        return this.append(value);
      }
  
      const newNode = new Node(value);
  
      const leader = this.traverseToIndex(index-1);
      let nextNode = leader.next;
      leader.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return this.printList();
    }
  
    traverseToIndex(index){
      //check params
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    remove(index){
  
      if(index >= this.length){
        return;
      }
      
      const leader = this.traverseToIndex(index-1);
      leader.next = leader.next.next;
      this.length--;
      console.log(this);
      return this.printList();
      
    }
    
    myInsert(index, value){
      if(index >= this.length){
        return this.append(value);
      }
      const newNode = new Node(value);
      let currNode = this.head;
      let length = 0
      while(currNode && index-1 != length){
          currNode = currNode.next;
        length++;
      }
      //console.log(`length ${length}, index-1 ${index-1}`)
      newNode.next = currNode.next;
      currNode.next = newNode;
      if(index === 1){
        this.head = newNode;
      } else if (index === this.length-1){
        this.tail = newNode;
      }
      this.length++;
      console.log(this.length);
  
      
  
      return this;
    }
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.printList();
  myLinkedList.insert(2,99);
  myLinkedList.insert(20,88);
  myLinkedList.remove(2);
  myLinkedList.remove(2);
  // console.log(`head ${myLinkedList.head.value}, tail ${myLinkedList.tail.value}`)
  //console.log(myLinkedList);