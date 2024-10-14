function solution(sequence, k) {
  var answer = [];
  let p1 = 0;
  let p2 = 0;
  let minLength = Infinity;

  while (p2 < sequence.length) {
    let sum = 0;

    for (let i = p1; i <= p2; i++) {
      sum += sequence[i];
    }

    if (sum === k) {
      const currentLength = p2 - p1;
      if (currentLength < minLength) {
        minLength = currentLength;
        answer = [p1, p2];
      }
      p2++;
    }
    if (sum > k) p1++;
    if (sum < k) p2++;
  }

  return answer;
}

console.log(solution([2, 2, 2, 2, 2], 6));
