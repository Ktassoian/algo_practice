/*
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first (iterative)
const leafList = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    if (current.left === null && current.right === null)
      result.push(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return result;
};

// recursive
const leafList1 = (root) => {
  const leaves = [];
  const fillLeaves = (root, leaves) => {
    if (root === null) return;
    if (root.left === null && root.right === null) leaves.push(root.val);
    fillLeaves(root.left, leaves);
    fillLeaves(root.right, leaves);
  };
  fillLeaves(root, leaves);
  return leaves;
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

leafList(a); // -> [ 'd', 'e', 'f' ]
leafList1(a); // -> [ 'd', 'e', 'f' ]
