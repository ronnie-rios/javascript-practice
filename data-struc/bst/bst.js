class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null ? true : false;
  }

  min(current = this.root) {

    while(current.left!== null) {
        current = current.left;
    }
    return current.data;
  }

  max(current = this.root) {
    while(current.right !== null) {
        current = current.right;
    }
    return current.data;
  }
  
  contains(searchVal) {
    let current = this.root;

    while(current !== null) {
        //if equals return true
        if(current === searchVal) {
            return true;
            //if the data is less set the left
        } else if (current.data < searchVal) {
            current = current.left;
            //if search val greather than, move to rgight
        } else if (searchVal > current.data) {
            current = current.right;
        }
        return false;
    }
  }


  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }

  insert(newVal) {
    //create the new node
    const newNode = new BSTNode(newVal);
    if(this.isEmpty()) {
      this.root = newNode;
      return;
    }
    //keep track of our pointer;
    let current = this.root;

    while(current !== null) {
      if(newVal <= current.data) {
        //once we hit null, we can set it
        if(current.left ===null) {
          current.left = newNode;
          return this;
        }
        //if it not null we overwrite the pointer
        current = current.left;
      } else {
        if(current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   4  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(4);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print();
