function solution(n, arr1, arr2) {
  var answer = Array(n);
  let zero = '0';

  // 각 배열의 요소를 n 길이의 이진수 문자열로 변환
  // let NewArr1 = arr1.map((x) => x.toString(2).padStart(n, '0'));
  // let NewArr2 = arr2.map((x) => x.toString(2).padStart(n, '0'));
  
  let NewArr1 = arr1.map((x) => {
    if (x.toString(2).length < n) {
      let k = n - x.toString(2).length;
      return zero.repeat(k) + x.toString(2);
    } else return x.toString(2);
  });

  let NewArr2 = arr2.map((x) => {
    if (x.toString(2).length < n) {
      let k = n - x.toString(2).length;
      return zero.repeat(k) + x.toString(2);
    } else return x.toString(2);
  });

  for (let i = 0; i < n; i++) {
    let text = '';
    for (let j = 0; j < n; j++) {
      if (NewArr1[i][j] === '1' || NewArr2[i][j] === '1') {
        text += '#';
      }
      if (NewArr1[i][j] === '0' && NewArr2[i][j] === '0') {
        text += ' ';
      }
    }
    answer[i] = text;
  }

  return answer;
}

arr1 = [46, 33, 33, 22, 31, 50];
arr2 = [27, 56, 19, 14, 14, 10];

console.log(solution(6, arr1, arr2));
