function solution(s) {
  let answer = s.length;

  for (let unit = 1; unit <= s.length / 2; unit++) {
    let compressed = '';
    let prev = '';
    let count = 1;

    for (let i = 0; i < s.length; i += unit) {
      const current = s.substr(i, unit);

      if (prev === current) {
        count++;
      } else {
        if (count > 1) {
          compressed += count;
        }
        compressed += prev;
        prev = current;
        count = 1;
      }
    }

    if (count > 1) {
      compressed += count;
    }
    compressed += prev;

    answer = Math.min(answer, compressed.length);
  }

  return answer;
}
