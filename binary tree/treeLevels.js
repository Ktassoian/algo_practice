/*
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Depth First
const treeLevels1 = (root) => {
  if (root === null) return [];
  const levels = [];
  const stack = [{ node: root, levelNum: 0 }];
  while (stack.length > 0) {
    const { node, levelNum } = stack.pop();
    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }
    if (node.right !== null)
      stack.push({ node: node.right, levelNum: levelNum + 1 });
    if (node.left !== null)
      stack.push({ node: node.left, levelNum: levelNum + 1 });
  }
  return levels;
};

// breadth First
const treeLevels2 = (root) => {
  if (root === null) return [];

  const levels = [];
  const queue = [{ node: root, levelNum: 0 }];

  while (queue.length > 0) {
    const { node, levelNum } = queue.shift();

    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }
    if (node.left !== null)
      queue.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null)
      queue.push({ node: node.right, levelNum: levelNum + 1 });
  }
  return levels;
};

// recursive
const treeLevels3 = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  return levels;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }
  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
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

treeLevels1(a);
treeLevels2(a);
treeLevels3(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
