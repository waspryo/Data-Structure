class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {}

  insert() {}

  min() {}

  max() {}

  contains() {}

  // depth first search

  // in-order
  dfsInOrder() {}

  // pre-order
  dfsPreOrder() {}

  // post-order
  dfsPostOrder() {}

  // breadth first search
  dfs() {}
}
