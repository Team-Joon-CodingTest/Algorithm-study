function solution(want, number, discount) {
  var answer = 0;

  let 기준 = new Map();
  for (let k = 0; k < want.length; k++) {
    기준.set(want[k], number[k]);
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    let arr = discount.slice(i, i + 10);
    // console.log(i);

    let map1 = new Map();
    for (let x of arr) {
      map1.set(x, (map1.get(x) ? map1.get(x) : 0) + 1);
    }

    //비교
    let isValid = true;
    for (const [fruit, num] of 기준) {
      if ((map1.get(fruit) || 0) < num) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }

  return answer;
}
console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
