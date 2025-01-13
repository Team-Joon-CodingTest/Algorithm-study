const input = parseInt(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim(),
  10
);

function solution(N) {
  let answer = [];
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  function permute(tempArr, remainArr) {
    if (remainArr.length === 0) {
      answer.push(tempArr);
      return;
    }

    for (let i = 0; i < remainArr.length; i++) {
      const current = remainArr[i];
      const remaining = remainArr.slice(0, i).concat(remainArr.slice(i + 1));

      permute([...tempArr, current], remaining);
    }
  }

  permute([], arr);

  const result = answer.map((row) => row.join(' '));
  result.forEach((row) => console.log(row));
}

solution(input);
