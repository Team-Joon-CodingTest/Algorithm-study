function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const numArr = numbers.split('');
  const visited = Array(numArr.length).fill(false);
  const resultSet = new Set();

  function generatePermutations(currNum) {
    if (currNum.length > 0) {
      const num = parseInt(currNum.join(''));
      if (isPrime(num)) {
        resultSet.add(num);
      }
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        currNum.push(numArr[i]);
        generatePermutations(currNum);
        currNum.pop();
        visited[i] = false;
      }
    }
  }

  generatePermutations([]);

  return resultSet.size;
}
