function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(num) {
  let answer = [];

  for (let x of arr) {
    let newNum = Number(x.toString().split('').reverse().join(''));
    if (isPrime(newNum)) answer.push(newNum);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
