const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map((e)=> e.split(' ').map(Number));

const N = parseInt(input);

// 순열을 구하는 함수
function getPermutations(arr, n) {
    const result = [];
    if (n === 1) return arr.map(el => [el]);

    arr.forEach((el, idx, array) => {
        const rest = [...array.slice(0, idx), ...array.slice(idx + 1)];
        const permutations = getPermutations(rest, n - 1);
        const attached = permutations.map(permutation => [el, ...permutation]);
        result.push(...attached);
    });

    return result;
}

const arr = Array.from({ length: N }, (_, i) => i + 1); // 1부터 N까지의 배열
const permutations = getPermutations(arr, N); // N개 숫자의 순열 구하기

// 결과 출력
permutations.forEach(permutation => console.log(permutation.join(' ')));