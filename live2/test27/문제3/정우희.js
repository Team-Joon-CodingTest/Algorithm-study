const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const kits = input[1].split(' ').map(Number);

function getPermutations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    result.push(...attached);
  });

  return result;
}

function solution(N, K, kits) {
  let count = 0;
  const allPermutations = getPermutations(kits, N);

  allPermutations.forEach((perm) => {
    let weight = 500;
    let isValid = true;

    for (let i = 0; i < perm.length; i++) {
      weight += perm[i] - K;
      if (weight < 500) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      count++;
    }
  });

  console.log(count);
}

solution(N, K, kits);
