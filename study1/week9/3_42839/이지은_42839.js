function solution(numbers) {
  const nums = numbers.split('');
  const permutations = new Set();

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const getPermutations = (arr, prefix = '') => {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        const newPrefix = prefix + arr[i];
        permutations.add(parseInt(newPrefix, 10));
        const newArr = [...arr];
        newArr.splice(i, 1);
        getPermutations(newArr, newPrefix);
      }
    }
  };

  getPermutations(nums);

  let answer = 0;
  permutations.forEach((num) => {
    if (isPrime(num)) answer++;
  });

  return answer;
}

