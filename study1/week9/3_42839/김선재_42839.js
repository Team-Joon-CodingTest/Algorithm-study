// 1. 수를 나열(순열)
// set 으로 중복을 제거
// 정수형으로 바꿔 앞자리 0을 제거
// 2. 중복이 제거된 Set에 있는 값을 소수 판별
function solution(numbers) {
  const arr = numbers.split("");
  const answer = new Set();

  // 순열
  function getPermutation(numbersArray, fixedNumber) {
    if (numbersArray.length) {
      for (let i = 0; i < numbersArray.length; i++) {
        const temp = [...numbersArray];

        temp.splice(i, 1);

        // 정수형 변환
        let intNum = parseInt(fixedNumber + numbersArray[i]);

        if (isPrime(intNum)) {
          answer.add(intNum);
        }
        getPermutation(temp, fixedNumber + numbersArray[i]);
      }
    }
  }

  getPermutation(arr, "");
  return answer.size;
}

// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
