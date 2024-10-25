const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const arr = input[1].sort((a, b) => a - b);

  function getPermutation(arr, n) {
    if (n === 1) return arr.map((el) => [el]);

    let result = [];
    arr.forEach((element, idx, origin) => {
      let fixed = element;
      let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permutation = getPermutation(rest, n - 1);
      const attached = permutation.map((v) => [fixed, ...v]);
      result.push(...attached);
    });
    return result;
  }

  const answer = getPermutation(arr, M);

  answer.map((el) => console.log(el.join(' ')));
}

solution(input);


// 백트레킹 풀이
function solution(input) {
  const [N, M] = input[0];
  const arr = input[1].sort((a, b) => a - b);
  const visited = Array(N).fill(false); // 방문 여부 체크 배열
  const result = [];

  function backtrack(temp) {
    if (temp.length === M) {
      // 순열의 길이가 M에 도달했을 때 출력
      result.push(temp.join(' '));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i]) continue; // 이미 사용한 숫자는 패스

      visited[i] = true; // 현재 숫자를 사용 중으로 표시
      backtrack([...temp, arr[i]]); // 선택한 숫자를 결과에 추가하고 다음 단계로
      visited[i] = false; // 다시 사용 가능하도록 방문 기록 초기화
    }
  }

  backtrack([]);
  console.log(result.join('\n'));
}

solution(input);
