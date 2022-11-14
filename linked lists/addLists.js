/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Time: O(max(n,m)) | Space: O(max(n,m))

// case1: handle same length lists
// add two pointers together
//case2: handle diff length lists
// add num available, if missing digit assume 0
// case 3: handle carry
// case 4: handle final carry
// output will be longer than input
const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head1 === null ? 0 : head2.val;

  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const resultNode = new Node(digit);

  const next1 = head === null ? null : head1.next;
  const next2 = head === null ? null : head2.next;

  resultNode.next = addLists(next1, next2, nextCarry);
  return resultNode;
};
