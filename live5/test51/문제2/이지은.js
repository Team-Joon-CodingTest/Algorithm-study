const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const T = Number(input[0]);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const [k, W] = input[i].split(' ');
    const kLength = Number(k);

    const charCount = { A: 0, G: 0, T: 0, C: 0 };
    const frequencyMap = new Map();
    let maxFrequency = 0;

    for (let j = 0; j < kLength; j++) {
      charCount[W[j]]++;
    }
    const key = `${charCount.A},${charCount.G},${charCount.T},${charCount.C}`;
    frequencyMap.set(key, 1);
    maxFrequency = 1;

    for (let j = kLength; j < W.length; j++) {
      charCount[W[j - kLength]]--;
      charCount[W[j]]++;

      const key = `${charCount.A},${charCount.G},${charCount.T},${charCount.C}`;
      const currentFrequency = (frequencyMap.get(key) || 0) + 1;
      frequencyMap.set(key, currentFrequency);

      maxFrequency = Math.max(maxFrequency, currentFrequency);
    }

    results.push(maxFrequency);
  }

  console.log(results.join('\n'));
}

solution(input);
