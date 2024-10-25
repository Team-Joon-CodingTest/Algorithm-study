const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const tree = {};

for (let i = 1; i < input.length; i++) {
  const [node, left, right] = input[i];
  tree[node] = { left, right };
}

function preorder(node) {
  if (node === '.') return '';
  return node + preorder(tree[node].left) + preorder(tree[node].right);
}

function inorder(node) {
  if (node === '.') return '';
  return inorder(tree[node].left) + node + inorder(tree[node].right);
}

function postorder(node) {
  if (node === '.') return '';
  return postorder(tree[node].left) + postorder(tree[node].right) + node;
}

const root = 'A';

console.log(preorder(root));
console.log(inorder(root));
console.log(postorder(root));

// 참고
