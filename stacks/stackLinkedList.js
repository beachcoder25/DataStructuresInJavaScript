class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return !this.top ? 'Cant peek, Stack is empty\n' : `Peek value= ${this.top.value}\n`;
    }
    push(value) {
      const newNode = new Node(value);
  
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
  
      console.log(`You pushed ${this.top.value}\nTop=${this.top.value}\nBottom=${this.bottom.value}\n`);
      this.length++;
    }
    pop() {
      if (!this.top) { return 'Stack is empty'; }
      if (this.length === 1) { this.bottom = null; }
      const poppedNode = this.top;
      this.top = poppedNode.next;
      this.length--;
  
      return `You popped ${poppedNode.value}\nTop=${!this.top ? 'Stack is empty' : this.top.value}\nBottom=${!this.bottom ? 'Stack is empty' : this.bottom.value}\n`;
  
    }
    isEmpty() {
      //isEmpty
      return !this.bottom ? 'Stack is empty\n' : 'Stack is NOT empty\n';
  
    }
  
  }
  
  const myStack = new Stack();
  
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.isEmpty());