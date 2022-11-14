Linked list vs array
\*\*arr stores elements right next to each other
∙ slows runtime

index of array corresponds to position linked list

where arr has elements, linked lists have nodes

linked lists nodes don't need to be stored together

typically linked lists are O(1)insertion

Dummy Head pattern - where we use a fake node to act as the head of the linked list. the dummy node is used to simplify edge cases such as inserting the first node into an 'empty' linked list

Head - term commonly used to describe the first node of a linked list

Tail - term commonly used to describe the 'last node' of a linked list

What is the optimal complexity for searching for a target value in a standard singly linked-list?

- O(n)T and O(1)S if done iteratively
  -Recursive is less optimal at O(n)T and O(n)S

current.next.val is unsafe because if the current is the tail node, the expression throws an error because current.next is null and null doesn't have a val property

2 properties that are typically stored in the nodes of a singly linked-list
-val: the data being stored
-next: reference to the next sequential node in the list.
