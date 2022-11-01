/* Binary Search Pseudocode:

input: array and a value
  create left pointer at start of array, and a right pointer at the end
  while left comes before right:
    create a pointer in the middle
    if the desired value, return index
    if value is too small, move left pointer up
    if value is too large, move right pointer down
  if no desired value found, return -1
*/

/* BFS

create a queue (can be an array) and a variable to store the values of the nodes visited
place the root node in the queue
loop as long as there is anything in the queue
  dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  if there is a left property on the node dequeued - add it to the queue
  if there is a right property on the node dequeued - add it to the queue
return the variable that stores the values
*/
