const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

let i = 0;
while (true) {
  const data = input[i].split(' ').map(Number);
  const k = data[0];
  if (k === 0) break;

  const S = data.slice(1);

  const combinations = getCombinations(S, 6);
  combinations.forEach((combination) => {
    console.log(combination.join(' '));
  });

  i++;
  if (input[i].split(' ')[0] != '0') console.log('');
}
