function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let arr = Array(n);

  for (let i = 0; i < lost.length; i++) {
    console.log(reserve);
    
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] - 1 === reserve[j]) {
        answer++;
        reserve.splice(j, 1);
        break;
      } else if (lost[i] + 1 === reserve[j]) {
        answer++;
        reserve.splice(j, 1);
        break;
      }
    }
  }

  return answer;
}

// console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
