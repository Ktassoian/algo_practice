/*
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  // create dummy head to start list
  let dummy = new Node(null);
  // store tail val starting at dummy head
  let tail = dummy;
  // iterate through values arr
  for (let val of values) {
    // set the next tail as the new node
    tail.next = new Node(val);
    // set tail as next
    tail = tail.next;
  }
  // return dummy head
  return dummy;
};

createLinkedList(['h', 'e', 'y']);
// h -> e -> y
