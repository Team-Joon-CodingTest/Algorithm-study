const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const weights = input[1];

  const 중량 = 400;

  let count = 0;

  function getPermutations(N, arr = [], used = [], result = []) {
    if (arr.length === N) {
      result.push([...arr]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!used[i]) {
        used[i] = true;
        arr.push(i);
        getPermutations(N, arr, used, result);
        arr.pop();
        used[i] = false;
      }
    }

    return result;
  }

  const 루틴모음 = getPermutations(N);

  for (let i = 0; i < 루틴모음.length; i++) {
    let currentWeight = 중량;
    const 루틴 = 루틴모음[i];
    let valid = true;

    for (let j = 0; j < 루틴.length; j++) {
      currentWeight += weights[루틴[j]] - K;
      if (currentWeight < 중량) {
        valid = false;
        break;
      }
    }

    if (valid) count++;
  }
  return count;
}

console.log(solution(input));
