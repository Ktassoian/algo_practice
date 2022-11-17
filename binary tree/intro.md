Parent child relationship with nodes
root has no parent
bottom nodes are leaf nodes

binary tree

- at most 2 children per node
- exactly 1 root
- exactly 1 path b/w root and any node (path is a single route to get to a node)
  Examples:
  ✅
  a
  |
  b

✅
a
/ \
b c

✅
a

✅
empty tree

❌
a
/ \
 b -> c

❌
z
|
a
/ \
 b -> c

nodes are represented as objects
current value
left and right pointers (node.left; node.right)
null to represent a child that doesnt exist

class Node {
contructor(val) {
this.val = val;
this.left = null;
this.right = null;
}
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.right = c;
a.left = b;
b.left = d;
