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
    let isPerfect = 0;
    let divisors = [];
    for (let i = 0; i < A; i++) {
      // 1.
      if (A % i === 0) {
        // 2.
        isPerfect += i;
        divisors.push(i);
      }
    }
    // 혹시 모를 예외를 위한 정렬
    divisors.sort((a, b) => a - b);

    // 3.
    if (A === isPerfect) {
      console.log(A, '=', divisors.join(' + '));
    } else {
      console.log(A, 'is NOT perfect');
    }
    process.exit();
  });

/*

어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.

예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.

n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.

완전수일 때, 약수들은 오름차순으로 나열해야 한다. -> 배열에 저장해야겠네.

1. 약수 구하기
2. 자신을 제외한 약수값 다 더하기
3-1. 다 더한값이 자신과 같으면 계산한 식 나오기.
3-2. 아니면 n is not perfect.

시간 남으면 시간 줄일 수 있는 방법 찾기

*/
