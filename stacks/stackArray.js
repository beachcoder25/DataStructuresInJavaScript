class Stack {
    constructor() {
      this.a = []
    }
    
    peek() {
      return `Peek: ${this.a[this.a.length-1]}`;
    }
    
    push(value) {
      this.a.push(value);
      return `Pushed new value: ${this.a} `;
    }
    
    pop() {
      this.a.pop();
      if(this.a.length === 0){return 'Cant pop, a is empty';}
  
      return `You popped a value: ${this.a}`;
  
    }
    isEmpty() {
      //isEmpty
      return this.a[this.a.length-1] ? 'NOT empty' : 'Empty';
  
    }
  
  }
  
  const myStack = new Stack();
  
  console.log(myStack.push('google'));
  console.log(myStack.push('udemy'));
  console.log(myStack.push('discord'));
  console.log(myStack.peek());
  console.log(myStack.push('reddit'));
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  // console.log(myStack.pop());
  console.log(myStack.isEmpty());
  console.log(myStack.push('wordle'));