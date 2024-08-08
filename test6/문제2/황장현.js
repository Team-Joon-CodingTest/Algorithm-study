const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    // 솔루션 작성
    const A = parseInt(input[0]);
    let inputNum = A;
    if (inputNum <= 1) return 2;
    if (inputNum <= 3) return A;

    while (1) {
      if (inputNum % 2 === 0 || inputNum % 3 === 0) {
        inputNum += 1;
        continue;
      }

      let isPrime = true;
      for (let i = 5; i * i <= inputNum; i += 6) {
        if (inputNum % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        console.log(inputNum);
        return inputNum;
      }

      inputNum += 1;
    }

    process.exit();
  });

/*

정수 n(0 ≤ n ≤ 4*10^9)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

1. 인풋값이 소수인지 체크
2. 아니면 1씩 증가
3. 다시 체크 
4. 반복

*/
