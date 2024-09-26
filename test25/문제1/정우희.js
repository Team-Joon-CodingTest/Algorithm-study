const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function cantorSet(n) {
  if (n === 0) return '-';

  const previous = cantorSet(n - 1);
  const spaces = ' '.repeat(previous.length);
  return previous + spaces + previous;
}

for (const n of input) {
  console.log(cantorSet(n));
}
