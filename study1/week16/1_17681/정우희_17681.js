function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let combined = (arr1[i] | arr2[i]).toString(2);
    let line = '';
    while (combined.length < n) {
      combined = '0' + combined;
    }
    for (let j = 0; j < n; j++) {
      line += combined[j] === '1' ? '#' : ' ';
    }
    result.push(line);
  }

  return result;
}
