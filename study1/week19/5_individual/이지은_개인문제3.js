function solution(test) {
  let answer = 0;
  let testNum = test.length;
  let personNum = test[0].length;
  let tmp = [];

  for (let i = 1; i <= personNum; i++) {
    for (let j = 1; j <= personNum; j++) {
      let cnt = 0;
      for (let t = 0; t < testNum; t++) {
        let mentor = 0,
          mentee = 0;
        for (let p = 0; p < personNum; p++) {
          if (test[t][p] === i) mentor = p;

          if (test[t][p] === j) mentee = p;
        }
        if (mentor < mentee) {
          cnt++;
        }
      }
      if (cnt === testNum) {
        answer++;
        tmp.push([i, j]);
      }
    }
  }
  console.log(tmp);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
