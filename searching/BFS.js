class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
  
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currNode = this.root;
        while (true) {
          if (value < currNode.value) {
            // Left
            if (!currNode.left) {
              currNode.left = newNode;
              return this;
            }
            currNode = currNode.left;
          } else {
            // Right
            if (!currNode.right) {
              currNode.right = newNode;
              return this;
            }
            currNode = currNode.right;
          }
        }
      }
    }
    lookup(value) {
      let currNode = this.root;
      while (currNode) {
        if (value === currNode.value) {
          return currNode;
        } else if (value < currNode.value) {
          currNode = currNode.left;
        } else if (value > currNode.value) {
          currNode = currNode.right;
        }
      }
      return false;
    }
    remove(value) {
      let removeNode = this.lookup(value);
      if (removeNode) {
        if (!removeNode.right) {
          removeNode = removeNode.left;
        } else {
          let currNode = removeNode.right;
          while (currNode.left) {
            currNode = currNode.left;
          }
          removeNode = currNode;
        }
      }
  
      return removeNode;
    }
    breadthFirstSearch() {
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);
  
      while (queue.length > 0) {
        currentNode = queue.shift();
        console.log(currentNode.value);
        list.push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      return list;
    }
    breadthFirstSearchRecursive(queue, list){
      if(!queue.length){
        return list;
      }
      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
          queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      return this.breadthFirstSearchRecursive(queue, list);
    }
  }
  // InOrder = [1,4,6,9,25,20,170]
  // PreOrder = [9,4,1,6,20,15,170]
  // PostOrder = [1,6,4,15,170,20,9]
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  console.log(tree.breadthFirstSearch());
  console.log(tree.breadthFirstSearchRecursive([tree.root], []));