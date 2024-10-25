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
    let primeCnt = 0;
    if (A <= 3) {
      console.log(1);
      return 1;
    }
    for (let i = A + 1; i <= 2 * A; i++) {
      if (i % 2 === 0 || i % 3 === 0) {
        continue;
      }
      let isPrime = true;
      for (let j = 5; j * j <= i; j += 2) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeCnt += 1;
      }
    }
    console.log(primeCnt);
    return primeCnt;
    process.exit();
  });

/* 
n이 주어졌을 때,
n보다 크고 2n보다 작거나 같은 소수의 개수를 구하시오

1. 범위 설정
2. 범위 안에서 소수 체크
3. 소수 체크 카운팅

*/
