// Q.1:Implement Binary tree
class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}

let root = null;

const insert = (root, value) => {
  if (root == null) {
    let node = new Node(value);
    root = node;
    return root;
  }
  if (value <= root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }
  return root;
};

const search = (root, value) => {
  if (root == null) {
    return false;
  }
  if (root.value == value) {
    return true;
  } else if (value < root.value) {
    return search(root.left, value);
  }
  return search(root.right, value);
};

const findMaxVal = (root) => {
  if (root == null) {
    return null;
  }
  if (root.right == null) {
    return root.value;
  }
  return findMaxVal(root.right);
};

const remove = (root, value) => {
  if (root == null) {
    return null;
  }
  if (value < root.value) {
    root.left = remove(root.left, value);
  } else if (value > root.value) {
    root.right = remove(root.right, value);
  } else {
    if (root.left == null && root.right == null) {
      return null;
    }
    if (root.left && root.right) {
      let temp = findMaxVal(root.left);
      root.value = temp;
      root.left = remove(root.left, temp);
    } else {
      if (root.left !== null) {
        return root.left;
      }
      if (root.right !== null) {
        return root.right;
      }
    }
  }
  return root;
};

const preOrder = (root) => {
  if (root == null) {
    return;
  }
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

const inOrder = (root) => {
  if (root == null) {
    return;
  }
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

const postOrder = (root) => {
  if (root == null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

root = insert(root, 8);
root = insert(root, 3);
root = insert(root, 10);
root = insert(root, 1);
root = insert(root, 6);
root = insert(root, 14);
root = insert(root, 4);
root = insert(root, 7);
root = insert(root, 13);

preOrder(root);
console.log("------End of PreOrder------");
inOrder(root);
console.log("------End of InOrder------");
postOrder(root);
console.log("------End of PostOrder------");

console.log(search(root, 7));
console.log(search(root, 700));

root = remove(root, 6);
preOrder(root);
console.log("----------------");
root = remove(root, 8);
preOrder(root);

// Q2:Find height of a given tree
// class Node {
class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

let root;

function treeHeight(node) {
  if (node == null) {
    return 0;
  } else {
    let leftHeight = treeHeight(node.left);
    let rightHeight = treeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

root = new Node(1);
root.left = new Node(12);
root.right = new Node(13);
root.right.left = new Node(14);
root.right.right = new Node(15);
root.right.left.left = new Node(21);
root.right.left.right = new Node(22);
root.right.right.left = new Node(23);
root.right.right.right = new Node(24);
console.log("Height/Depth of the tree is : " + treeHeight(root));

// Q3:Perform Pre-order, Post-order, In-order traversal

class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}

let root = null;

const insert = (root, value) => {
  if (root == null) {
    let node = new Node(value);
    root = node;
    return root;
  }
  if (value <= root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }
  return root;
};

const search = (root, value) => {
  if (root == null) {
    return false;
  }
  if (root.value == value) {
    return true;
  } else if (value < root.value) {
    return search(root.left, value);
  }
  return search(root.right, value);
};

const findMaxVal = (root) => {
  if (root == null) {
    return null;
  }
  if (root.right == null) {
    return root.value;
  }
  return findMaxVal(root.right);
};

const remove = (root, value) => {
  if (root == null) {
    return null;
  }
  if (value < root.value) {
    root.left = remove(root.left, value);
  } else if (value > root.value) {
    root.right = remove(root.right, value);
  } else {
    if (root.left == null && root.right == null) {
      return null;
    }
    if (root.left && root.right) {
      let temp = findMaxVal(root.left);
      root.value = temp;
      root.left = remove(root.left, temp);
    } else {
      if (root.left !== null) {
        return root.left;
      }
      if (root.right !== null) {
        return root.right;
      }
    }
  }
  return root;
};

const preOrder = (root) => {
  if (root == null) {
    return;
  }
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

const inOrder = (root) => {
  if (root == null) {
    return;
  }
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

const postOrder = (root) => {
  if (root == null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

root = insert(root, 8);
root = insert(root, 3);
root = insert(root, 10);
root = insert(root, 1);
root = insert(root, 6);
root = insert(root, 14);
root = insert(root, 4);
root = insert(root, 7);
root = insert(root, 13);

console.log("------Pre Order Traversal------");
preOrder(root);
console.log("------In Order Traversal------");
inOrder(root);
console.log("------Post Order Traversal------");
postOrder(root);

// Q4:Function to print all the leaves in a given binary tree
class Node {
  constructor() {
    this.value = 0;
    this.left = null;
    this.right = null;
  }
}
let root = null;
function searchLeaves(root) {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    console.log(root.value + " ");
    return;
  }

  if (root.left != null) searchLeaves(root.left);

  if (root.right != null) searchLeaves(root.right);
}

function newNode(value) {
  var temp = new Node();
  temp.value = value;
  temp.left = null;
  temp.right = null;
  return temp;
}

root = newNode(8);
root.left = newNode(3);
root.left.left = newNode(1);
root.left.right = newNode(6);
root.left.right.left = newNode(4);
root.left.right.right = newNode(7);
root.right = newNode(10);
root.right.right = newNode(14);
root.right.right.left = newNode(13);

console.log("Leaves are");
searchLeaves(root);

// Q5:Implement BFS (Breath First Search) and DFS (Depth First Search)
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

var root = null;

function treeBFS() {
  var h = height(root);
  var i;
  for (i = 1; i <= h; i++) currentLevel(root, i);
}

function treeDFS(root) {
  if (root == null) {
    return;
  }
  console.log(root.value);
  treeDFS(root.left);
  treeDFS(root.right);
}

function height(root) {
  if (root == null) return 0;
  else {
    var leftHeight = height(root.left);
    var rightHeight = height(root.right);

    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
}

function currentLevel(root, level) {
  if (root == null) return;
  if (level == 1) console.log(root.value + " ");
  else if (level > 1) {
    currentLevel(root.left, level - 1);
    currentLevel(root.right, level - 1);
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("BFS:");
treeBFS();
console.log("DFS:");
treeDFS(root);

// Q6:Find sum of all left leaves in a given Binary Tree
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
function LeftLeavesSum(root) {
  if (root == null) return 0;
  var stack = [];
  stack.push(root);
  var sum = 0;
  while (stack.length > 0) {
    var currentNode = stack[stack.length - 1];
    stack.pop();
    if (currentNode.left != null) {
      stack.push(currentNode.left);
      if (currentNode.left.left == null && currentNode.left.right == null) {
        sum = sum + currentNode.left.key;
      }
    }
    if (currentNode.right != null) stack.push(currentNode.right);
  }
  return sum;
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.right.right.left = new Node(6);
root.left.left = new Node(7);
root.left.right = new Node(8);
root.left.right.right = new Node(9);
console.log(`Sum of left leaves is ${LeftLeavesSum(root)}`);

// Q7:Find sum of all nodes of the given perfect binary tree
function sumOfNodes(l) {
  let leftCount = Math.pow(2, l - 1);

  let v = [];

  for (let i = 1; i <= l; i++) {
    v.push([]);
  }

  for (let i = 1; i <= leftCount; i++) {
    v[l - 1].push(i);
  }

  for (let i = l - 2; i >= 0; i--) {
    let k = 0;

    while (k < v[i + 1].length - 1) {
      v[i].push(v[i + 1][k] + v[i + 1][k + 1]);
      k += 2;
    }
  }

  let sum = 0;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < v[i].length; j++) {
      sum += v[i][j];
    }
  }

  return sum;
}

let l = 3;

console.log(`Sum of all nodes : ${sumOfNodes(l)}`);
// Q8:Count subtress that sum up to a given value x in a binary tree
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let v;

function getNode(value) {
  let newNode = new Node(value);
  return newNode;
}

function countSumX(root, x) {
  if (root === null) return 0;
  let ls = countSumX(root.left, x);
  let rs = countSumX(root.right, x);
  let sum = ls + rs + root.value;

  if (sum === x) v++;

  return sum;
}

function countSum(root, x) {
  if (root === null) return 0;
  v = 0;
  let ls = countSumX(root.left, x);
  let rs = countSumX(root.right, x);
  if (ls + rs + root.value === x) v++;
  return v;
}

let root = getNode(1);
root.left = getNode(2);
root.right = getNode(3);
root.left.left = getNode(5);
root.left.right = getNode(8);
root.right.left = getNode(4);
root.right.right = getNode(9);

let x = 5;

console.log(`Count : ${countSum(root, x)}`);

// Q9:Find maximum level sum in Binary Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxSum(root) {
  if (root == null) return 0;

  let result = root.value;

  let q = [];
  q.push(root);
  while (q.length != 0) {
    let count = q.length;

    let sum = 0;
    while (count-- > 0) {
      let temp = q.shift();

      sum = sum + temp.value;

      if (temp.left != null) q.push(temp.left);
      if (temp.right != null) q.push(temp.right);
    }

    result = Math.max(sum, result);
  }
  return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);

console.log("Maximum level sum is " + maxSum(root));

// Q10:Print the nodes at odd levels of a tree
class oddNode {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function maxLevelSum(root) {
  if (root == null) return 0;

  let result = root.data;

  let q = [];
  q.push(root);
  while (q.length != 0) {
    let count = q.length;

    let sum = 0;
    while (count-- > 0) {
      let temp = q.shift();

      sum = sum + temp.data;

      if (temp.left != null) q.push(temp.left);
      if (temp.right != null) q.push(temp.right);
    }

    result = Math.max(sum, result);
  }
  return result;
}

let rootofbinarytree = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);

console.log("Maximum level sum is " + maxLevelSum(rootofbinarytree));

class Nodee {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function printOddNodes(root, isOdd) {
  if (root == null) return;

  if (isOdd == true) console.log(root.data + " ");

  printOddNodes(root.left, !isOdd);
  printOddNodes(root.right, !isOdd);
}
function newNode(data) {
  let node = new Node(data);
  return node;
}

let rootoftr = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
printOddNodes(rootoftr, true);
