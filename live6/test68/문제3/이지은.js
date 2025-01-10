function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      arr.push(s[0].toUpperCase());
    } else if (s[i - 1] === ' ') {
      arr.push(s[i].toUpperCase());
    } else {
      arr.push(s[i].toLowerCase());
    }
  }

  return arr.join('');
}
console.log(solution('3people unFollowed me'));
