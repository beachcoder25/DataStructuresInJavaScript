class Queue {
    constructor() {
      this.a = []
    }
    
    peek() {
      return `Peek: ${this.a[this.a.length-1]}`;
    }
    
    enqueue(value) {
      this.a.push(value);
      return `Enqueued new value: ${this.a} `;
    }
    
    dequeue() {
      this.a.shift();
      if(this.a.length === 0){return 'Cant pop, a is empty';}
  
      return `You dequeued a value: ${this.a}`;
  
    }
    isEmpty() {
      //isEmpty
      return this.a[this.a.length-1] ? 'Queue is NOT empty' : 'Queue is Empty';
  
    }
  
  }
  
  const myQueue = new Queue();
  
  console.log(myQueue.enqueue('google'));
  console.log(myQueue.enqueue('udemy'));
  console.log(myQueue.enqueue('discord'));
  console.log(myQueue.peek());
  console.log(myQueue.enqueue('reddit'));
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  // console.log(myQueue.dequeue());
  console.log(myQueue.isEmpty());
  console.log(myQueue.enqueue('wordle'));
  console.log(myQueue.isEmpty());