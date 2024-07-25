function solution(food) {
  var answer = [];

  for (let i = 1; i < food.length; i++) {
    let num = Math.floor(food[i] / 2);

    answer.push(food[i] * num);
  }

  return answer;
}
