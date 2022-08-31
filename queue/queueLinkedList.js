class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return !this.first ? 'Cant peek, Stack is empty\n' : `Peek value=${this.first.value}\n`;
    }
    enqueue(value) {
      const newNode = new Node(value);
  
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
  
      console.log(`You enqueued ${this.last.value}\nfirst=${this.first.value}\nlast=${this.last.value}\n`);
      this.length++;
    }
    dequeue() {
      if(!this.first){ return 'Cant dequeue, Queue is empty';}
      if(this.length === 1){this.last= null;}
      const poppedNode = this.first;
      this.first = !this.first.next ? null : this.first.next;
      this.length--;
  
      return `You dequeued ${poppedNode.value}\nfirst=${!this.first ? 'Stack is empty' : this.first.value}\nlast=${!this.last ? 'Stack is empty' : this.last.value}\n`;
  
    }
    isEmpty() {
      //isEmpty
      return !this.last ? 'Stack is empty\n' : 'Stack is NOT empty\n';
  
    }
  
  }
  
  const myQueue = new Queue();
  
  console.log(myQueue.isEmpty());
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  console.log(myQueue.peek());
  console.log(myQueue.dequeue());
  // console.log(myQueue.dequeue());
  // console.log(myQueue.dequeue());
  // console.log(myQueue.dequeue());
  // console.log(myQueue.isEmpty());
  