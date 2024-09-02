const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const paperInBalloons = input[1];
  const result = [];
  const balloons = Array.from({ length: N }, (_, i) => i + 1);

  let currentIndex = 0;

  while (balloons.length > 0) {
    const currentBalloon = balloons.splice(currentIndex, 1);

    const paperNum = paperInBalloons[currentBalloon - 1];

    result.push(currentBalloon);

    if (balloons.length === 0) break;

    if (paperNum > 0) {
      currentIndex = (currentIndex + (paperNum - 1)) % balloons.length;
    } else {
      currentIndex = (currentIndex + paperNum) % balloons.length;
      if (currentIndex < 0) {
        currentIndex += balloons.length;
      }
    }
  }

  return result.join(' ');
}

console.log(solution(input));
