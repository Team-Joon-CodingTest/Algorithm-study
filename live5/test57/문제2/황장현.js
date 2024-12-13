const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function rotateLeft(array, rotations) {
  return array.slice(rotations).concat(array.slice(0, rotations));
}

function rotateRight(array, rotations) {
  return array.slice(-rotations).concat(array.slice(0, -rotations));
}

function solution(input) {
  const [N, M] = input[0];
  const numberIndexs = input[1];
  let circleQueue = Array.from({ length: N }, (_, i) => i + 1);
  let totalRotations = 0;

  for (const numberIndex of numberIndexs) {
    const targetIndex = circleQueue.indexOf(numberIndex);

    const leftRotations = targetIndex;
    const rightRotations = circleQueue.length - targetIndex;

    if (leftRotations <= rightRotations) {
      circleQueue = rotateLeft(circleQueue, leftRotations);
      totalRotations += leftRotations;
    } else {
      circleQueue = rotateRight(circleQueue, rightRotations);
      totalRotations += rightRotations;
    }

    circleQueue.shift();
  }
  return totalRotations;
}

console.log(solution(input));
