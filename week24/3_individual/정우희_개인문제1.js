const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let visited = new Array(n).fill(false); //0번째 도시부터 n-1번째 도시 방문 여부 확인할 배열

let arr = Array.from(Array(n), () => new Array(n).fill(null));
for (let i = 0; i < n; i += 1) {
  const first = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < n; j += 1) {
    arr[i][j] = first[j];
  }
}

const list = [];
let selected = [];
const dfs = (depth) => {
  if (depth === n) {
    let result = 0;
    for (let i = 0; i < n; i += 1) {
      let start = selected[i]; //출발하는 도시
      let end = selected[i + 1]; //도착하는 도시
      //맨 마지막 도시인 경우, 맨 처음 도시로 가는 경로 설정
      if (end === undefined) end = selected[0];

      //i에서 j로 가는 길이 없는 경우 예외처리
      if (arr[start][end] !== 0) {
        result += arr[start][end];
      } else return;
    }
    list.push(result);
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue; //방문했던 도시 제외
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(0);
const answer = Math.min(...list); //경우의 수들 중에서 가장 작은 값
console.log(answer);
