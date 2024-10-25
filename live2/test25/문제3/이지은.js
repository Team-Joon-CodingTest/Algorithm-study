const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');
// .map(Number);

function solution(input) {
  let N = Number(input[0]);
  let arr = input.slice(1);
  let answer = '';
  let tree = {};
  for (let i = 0; i < N; i++) {
    const [node, left, right] = arr[i].split(' ');
    tree[node] = [left, right];
  }

  function preorder(node) {
    if (node === '.') return;
    const [lt, rt] = tree[node];
    answer += node;
    preorder(lt);
    preorder(rt);
  }

  function inorder(node) {
    if (node === '.') return;
    const [lt, rt] = tree[node];
    inorder(lt);
    answer += node;
    inorder(rt);
  }

  function postorder(node) {
    if (node === '.') return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    answer += node;
  }
  preorder('A');
  answer += '\n';
  inorder('A');
  answer += '\n';
  postorder('A');
  return answer;
}

console.log(solution(input));
