function solution(number, limit, power) {
  var answer = 0;
  let measure_list = [];
  let count = 0;

  // 약수 개수 찾기
  function measureCount(num) {
    let result = [];
    let index = 1;

    while (index <= num) {
      if (num % index === 0) result.push(index);
      index++;
    }

    return result.length;
  }

  for (let i = 1; i < number + 1; i++) {
    count = measureCount(i);
    if (count > limit) {
      measure_list.push(power);
    } else {
      measure_list.push(measureCount(i));
    }
  }

  // 배열의 모든값을 더해줌
  measure_list.forEach((num) => {
    answer += num;
  });

  return answer;
}
