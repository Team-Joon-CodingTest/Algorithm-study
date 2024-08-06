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
    const primeNum = [2, 3, 5, 7];

    for (let i = 0; i < primeNum.length; i++) {
      if (A / primeNum[i] === 1) {
        console.log(A);
        process.exit();
      }
    }

    process.exit();
  });

/*

정수 n(0 ≤ n ≤ 4*10^9)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

1. 인풋값이 소수인지 체크
1-1. 소수 체크 2,3,5,7로 나눴을 때 소수점이 나오면 소수 
2. 아니면 1씩 증가
3. 다시 체크 
4. 반복

*/
