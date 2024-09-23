const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);

const tree = {};

for (let i = 1; i <= N; i++) {
  const [parent, left, right] = input[i].split(' ');
  tree[parent] = [left, right];
}

function preorder(node) {
  if (node === '.') return '';
  const [left, right] = tree[node];
  return node + preorder(left) + preorder(right);
}

function inorder(node) {
  if (node === '.') return '';
  const [left, right] = tree[node];
  return inorder(left) + node + inorder(right);
}

function postorder(node) {
  if (node === '.') return '';
  const [left, right] = tree[node];
  return postorder(left) + postorder(right) + node;
}

console.log(preorder('A'));
console.log(inorder('A'));
console.log(postorder('A'));
