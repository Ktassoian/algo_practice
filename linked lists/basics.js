// create a linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// link nodes together (typically taken care of if taking in properaly structured linked list)
a.next = b;
b.next = c;
c.next = d;
// A -> B -> C -> D -> NULL

// traversal algo
const printLinkedList = (head) => {
  // starts at beginging
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(a);

// Recursive
const printLinkedListRecursive = (head) => {
  // base case
  if (head === null) return;
  // process node by printing node's value
  console.log(head.val);
  printLinkedList(head.next);
};

printLinkedListRecursive(a);
