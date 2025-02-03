function solution(s) {
  const temp = s
    .slice(2, -2)
    .split('},{')
    .map((s) => s.split(',').map(Number));

  temp.sort((a, b) => a.length - b.length);

  const result = [];
  const seen = new Set();

  for (const arr of temp) {
    for (const num of arr) {
      if (!seen.has(num)) {
        result.push(num);
        seen.add(num);
      }
    }
  }

  return result;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
