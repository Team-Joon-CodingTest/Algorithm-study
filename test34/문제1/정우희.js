function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  let minLength = Infinity;
  let result = [0, 0];

  while (right < sequence.length) {
    if (sum === k) {
      let currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        result = [left, right];
      }
      left++;
      sum -= sequence[left - 1];
    } else if (sum < k) {
      right++;
      if (right < sequence.length) sum += sequence[right];
    } else {
      left++;
      sum -= sequence[left - 1];
    }
  }

  return result;
}
