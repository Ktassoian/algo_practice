/*
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) result.push(current.right);
    if (current.left) result.push(current.left);
  }
};

// Recursive
const depthFirstValues1 = (root) => {
  if (root === null) return [];
  const leftVal = depthFirstValues1(root.left);
  const rightVal = depthFirstValues1(root.right);
  return [root.val, ...leftVal, ...rightVal];
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
depthFirstValues1(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
