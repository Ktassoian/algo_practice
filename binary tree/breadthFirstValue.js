/*
Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
const breadthFirstValues = (root) => {
  if (root === null) return [];
  let leftVal = root.left.val;
  let rightVal = root.right.val;
  //   store current as root value
  let current = root.val;
  //   store previous
  let previous = null;
  let result = [root.val];
  // console.log('LEFT: ', leftVal);
  // console.log('RIGHT: ', rightVal);
  // console.log('CURRENT: ', current);
  // console.log('PREVIOUS: ', previous);
  // console.log('RESULT: ', result);
  //   check if current has a left value
  while (current !== null) {
    result.push(leftVal);
    previous = current;
    current = leftVal;
  }
  console.log('CURRENT: ', current);
  console.log('PREVIOUS: ', previous);
  console.log('RESULT: ', result);
  //       yes? add left.val to results, make current (root) previous, make left.val current
  //            go back to previous to get previous.right
  //                  start over with new current
  //       no? check current.right
  //
  //   check if current has a right pointers
  //     if yes - add right.val to results then make previous and right.val current
  //      if no - current === previous.left
};
*/

const breadthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);

    if (node.left !== null) queue.push(node.left);

    if (node.right !== null) queue.push(node.right);
  }
  console.log('RESULT: ', result);
  return result;
};

// TEST 1
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

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
