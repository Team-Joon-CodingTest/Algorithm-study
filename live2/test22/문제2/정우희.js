const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [E, S, M] = input.map(Number);

let count = 1;
while (true) {
  if (
    (count - E) % 15 === 0 &&
    (count - S) % 28 === 0 &&
    (count - M) % 19 === 0
  ) {
    console.log(count);
    break;
  }
  count++;
}
