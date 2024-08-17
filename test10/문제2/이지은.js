const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();
// .split(' ');
console.log(input);

function solution(num) {
  // console.log(num.split('0'));
  oneArr = num.split('0');
  one = oneArr.length;
  console.log('one', one);
  const oneNum = oneArr.filter((num) => num === '').length;
  console.log('oneNum', oneNum);

  console.log(num.split('1'));
  zeroArr = num.split('1');
  zero = zeroArr.length;
  const zeroNum = zeroArr.filter((num) => num === '').length;

  let answer = Math.min(one - oneNum, zero - zeroNum);
  return answer;
}

console.log(solution(input));
