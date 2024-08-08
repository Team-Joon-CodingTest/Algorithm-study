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

    process.exit();
  });

/* 
돌이 n개 주어진다
sk와 cy는 1 or 3개 가져갈 수 있다.
sk 가 항상 먼저 가져간다
마지막 돌 가져가는사람이 지는 게임
출력은 이긴 사람


짝수일때는 1개씩 가져가면 무조건 sk 승 
cy가 변수 만들어야함(3개 가져가기)
홀수일떄는 1개씩 가져가면 cy승
sk가 변수 만들어야함(3개 가져가기)

*/
