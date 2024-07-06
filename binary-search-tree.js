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

  bfs(value) {
    let nodes = [this.root];

    while (nodes.length) {
      const current = nodes.shift();

      if (current.value === value) {
        return current;
      }

      if (value < current.value && current.left) {
        nodes.push(current.left);
      }

      if (value > current.value && current.right) {
        nodes.push(current.right);
      }
    }

    console.log('Value not found')
  }

  bfsRecursive(value) {
    const searcher = (node) => {
      if (node.value === value) {
        return node;
      }

      if (value < node.value && node.left) {
        return searcher(node.left);
      }

      if (value > node.value && node.right) {
        return searcher(node.right);
      }

      console.log('Value not found')
    };

    return searcher(this.root);
  }

  delete(value) {
    if (!this.root) {
      console.log('Tree is empty');
      return;
    }

    const deleter = (node) => {
      if (node.value === value) {
        if (!node.right && !node.left) {
          return null;
        }

        if (node.right) {
          let current = node.right;

          while (current.left) {
            current = current.left;
          }

          return current;
        }

        if (node.left) {
          return node.left;
        }
      };

      if (value < node.value) {
        node.left = deleter(node.left);
      }

      if (value > node.value) {
        node.right = deleter(node.right);
      }

      return node;
    };

    this.root = deleter(this.root);

    return this.root;
  }
}

const nodeBST = new BSTNode(10);
const tree = new BST(nodeBST);

tree.insert(5);
tree.insert(11);
tree.insert(6);

// console.log('BFS result:', tree.bfsRecursive(5));
// console.log(tree)
console.log(tree.delete(5))