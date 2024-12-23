function solution(s) {
  let zero = 0;
  let count = 0;
  let newS = [];

  removeZero(s);

  function removeZero(s) {
    // console.log('s', s);
    newS = [];

    s.split('').map((el) => (el == '0' ? zero++ : newS.push(el)));
    count++;
    // console.log('zero의 개수', zero, '0제거한 배열->', newS);
  }
  while (newS.length !== 1) {
    let c = newS.length;
    newS = c.toString(2);
    removeZero(newS.toString());
  }

  return [count, zero];
}

console.log(solution('110010101001'));
