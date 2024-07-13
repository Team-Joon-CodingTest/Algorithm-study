function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!result.includes(numbers[i] + numbers[j])) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}
