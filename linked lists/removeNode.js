// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time: O(n) | Space: O(1)
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  let current = head;
  let prev = null;
  while (current !== null) {
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }
  return head;
};
