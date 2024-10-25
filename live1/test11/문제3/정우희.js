const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const T = parseInt(input[0], 10);
  const results = [];

  for (let t = 1; t <= T; t++) {
    const [kStr, W] = input[t].split(" ");
    const k = parseInt(kStr, 10);
    const n = W.length;

    const charCount = { A: 0, G: 0, T: 0, C: 0 };
    const hashMap = new Map();

    for (let i = 0; i < k; i++) {
      charCount[W[i]]++;
    }

    const generateKey = (count) =>
      `${count["A"]},${count["G"]},${count["T"]},${count["C"]}`;
    const initialKey = generateKey(charCount);
    hashMap.set(initialKey, 1);

    let maxFrequency = 1;

    for (let i = k; i < n; i++) {
      charCount[W[i]]++;
      charCount[W[i - k]]--;

      const currentKey = generateKey(charCount);
      if (hashMap.has(currentKey)) {
        hashMap.set(currentKey, hashMap.get(currentKey) + 1);
      } else {
        hashMap.set(currentKey, 1);
      }

      maxFrequency = Math.max(maxFrequency, hashMap.get(currentKey));
    }

    results.push(maxFrequency);
  }

  return results.join("\n");
}

console.log(solution(input));
