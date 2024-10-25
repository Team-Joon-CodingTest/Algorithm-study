const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('')
  .map(Number);

function solution(input) {
  let i = input.length - 2;

  //내림차순이 깨지는 지점 찾기
  while (i >= 0 && input[i] >= input[i + 1]) {
    i--;
  }

  // 만약 그런 지점이 없다면 (내림차순이므로 더 큰 수를 만들 수 없음)
  if (i < 0) {
    return 0;
  }

  // 3. i 위치에 있는 숫자보다 큰 숫자를 오른쪽에서 찾기
  let j = input.length - 1;
  while (input[j] <= input[i]) {
    j--;
  }

  // 4. 두 숫자 교환
  [input[i], input[j]] = [input[j], input[i]];

  // 5. i 이후의 숫자들을 오름차순으로 정렬
  let left = i + 1;
  let right = input.length - 1;
  while (left < right) {
    [input[left], input[right]] = [input[right], input[left]];

    left++;
    right--;
  }

  return Number(input.join(''));
}

console.log(solution(input));
