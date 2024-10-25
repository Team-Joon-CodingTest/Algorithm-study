function solution(name, yearning, photo) {
  var answer = [];
  // 이름:점수 객체 생성
  let obj = {};
  for (let n = 0; n < name.length; n++) {
    obj[name[n]] = yearning[n];
  }

  // 이름 판별
  for (person of photo) {
    let num = 0;
    for (n of person) {
      if (obj[n] !== undefined) {
        num += obj[n];
      }
    }
    answer.push(num);
  }

  return answer;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ]
  )
);
