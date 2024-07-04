class BSTNode {
  value;
  left;
  right;

  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root;

  constructor(node) {
    this.root = node;
  }

  insert(value) {
    const inserter = (node) => {
      if (node.value === value) {
        console.log('Value already present')
        return;
      }

      if (value < node.value) {
        if (node.left) {
          inserter(node.left);
        } else {
          node.left = new BSTNode(value);
          return this.root;
        }
      } 
      
      if (value > node.value) {
        if (node.right) {
          inserter(node.right);
        } else {
          node.right = new BSTNode(value);
          return this.root;
        }
      }
    };

    return inserter(this.root);
  }
}

const nodeBST = new BSTNode(10);
const tree = new BST(nodeBST);

tree.insert(5)
tree.insert(11)
tree.insert(11)
tree.insert(6)

console.log(tree)