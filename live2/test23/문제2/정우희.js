const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let idx = 1;

for (let t = 0; t < T; t++) {
  const n = parseInt(input[idx], 10);
  const clothesMap = new Map();

  for (let i = 1; i <= n; i++) {
    const [item, category] = input[idx + i].split(' ');

    if (clothesMap.has(category)) {
      clothesMap.set(category, clothesMap.get(category) + 1);
    } else {
      clothesMap.set(category, 1);
    }
  }

  let result = 1;
  for (const count of clothesMap.values()) {
    result *= count + 1;
  }

  console.log(result - 1);

  idx += n + 1;
}
