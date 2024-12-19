const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const ballons = input[1];

  const balloonsRef = ballons.map((move, index) => ({
    idx: index + 1,
    move,
  }));

  const result = [];
  let currentIndex = 0;

  while (balloonsRef.length > 0) {
    const { idx, move } = balloonsRef.splice(currentIndex, 1)[0];
    result.push(idx);

    if (balloonsRef.length === 0) break;

    if (move > 0) {
      currentIndex = (currentIndex + (move - 1)) % balloonsRef.length;
    } else {
      currentIndex =
        (currentIndex + move + balloonsRef.length) % balloonsRef.length;
    }
  }

  return result.join(' ');
}

console.log(solution(input));
