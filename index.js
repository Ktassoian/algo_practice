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
