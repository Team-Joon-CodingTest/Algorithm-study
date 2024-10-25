function solution(s, skip, index) {
  var answer = '';
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let newArr = [];

  for (x of alphabets) {
    if (!skip.includes(x)) {
      newArr.push(x);
    }
  }
  for (char of s) {
    for (let i = 0; i < newArr.length; i++) {
      if (char === newArr[i]) {
        answer += newArr[(i + index) % newArr.length];
      }
    }
  }

  return answer;
}
