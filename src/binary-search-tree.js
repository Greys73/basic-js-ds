const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    let newNode = new Node(data);
    if(this.tree == null) {
        this.tree = newNode;
    } else {
        this.insertNode(this.tree, newNode);
    }    
  }

  has(data) {
    let current = this.tree;
    while(current) {
      if(current.data == data) {
        return true;
      }
      if(current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.tree;
    while(current) {
      if(current.data == data) {
        return current;
      }
      if(current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(value, node = this.tree) {
    if (node.data > value) {
        node.left = this.remove(value, node.left);
        return node;
    }
    if (node.data < value) {
        node.right = this.remove(value, node.right);
        return node;
    } 
    if(node.data == value) {        
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      } else {
        if (node.left == null) {
            node = node.right;
            return node;
        }
        if(node.right == null) {
            node = node.left;
            return node;
        }
        if(node.left!= null && node.right!= null) {
          let minValue = this.min(node.right);
          node.data = minValue;
          node.right = this.remove(minValue, node.right);
          return node;
        }
      }
    }    
  }

  min(node = this.tree) {
    while(node.left) {
        node = node.left;
    }
    return node.data || null;
  }

  max(node = this.tree) {
    while(node.right) {
        node = node.right;
    }
    return node.data || null;
  }

  insertNode(node, newNode) {
    if(node.data > newNode.data) {
        if(node.left == null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right == null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }
}

module.exports = {
  BinarySearchTree
};