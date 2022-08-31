class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      
      const newNode = new Node(value);
  
      if(this.root === null){
        this.root = newNode;
      } else{
        let currNode = this.root;
        while(true){
          if(value < currNode.value){
            // Left
            if(!currNode.left){
              currNode.left = newNode;
              return this;
            }
            currNode = currNode.left;
          } else {
            // Right
            if(!currNode.right){
              currNode.right = newNode;
              return this;
            }
            currNode = currNode.right;
          }
        }
      }
    }
    
    lookup(value){
      let currNode = this.root;
      while(currNode){
        if(value === currNode.value){
          return currNode;
        } else if(value < currNode.value){
          currNode = currNode.left;
        } else if(value > currNode.value){
          currNode = currNode.right;
        }
      }
      return false;
    }
    remove(value){
      let removeNode = this.lookup(value);
      if(removeNode){
        if(!removeNode.right){
          removeNode = removeNode.left;
        } else{
          let currNode = removeNode.right;
          while(currNode.left){
            currNode = currNode.left;
          }
          removeNode = currNode;
        }
      }
  
      return removeNode;
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  console.log(JSON.stringify(traverse(tree.root)));
  tree.remove(9);
  //console.log(tree.lookup(9));
  console.log(JSON.stringify(traverse(tree.root)));
  
  function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  