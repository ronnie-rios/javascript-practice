function findClosest(tree, targetValue) {
  let smallest = null;
  let smallRange = Infinity;
  console.log(tree);
  while (tree !== null) {
    if (Math.abs(tree.value - targetValue) <= smallRange) {
      smallRange = Math.abs(tree.value - targetValue);
      smallest = tree.value;
    }
    if (smallRange === 0) {
      break;
    }
    if (targetValue < tree.value) {
      tree = tree.left;
    } else {
      tree = tree.right;
    }
  }
  return smallest;
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestTwo(tree, targetValue) {
  // Write your code here.
  let closestVal = tree.value;
  let newTree = tree;

  while (newTree !== null) {
    if (Math.abs(targetValue - newTree.value) < Math.abs(targetValue - closestVal)) {
      closestVal = newTree.value;
    }
    if (targetValue >= newTree.value) {
      newTree = newTree.right;
    } else {
      newTree = newTree.left;
    }
  }
  return closestVal;
}
