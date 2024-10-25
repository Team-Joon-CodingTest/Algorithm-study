function solution(food) {
  let result = '';
  for (let i = 0; i < food.length; i++) {
    result += i.toString().repeat(Math.floor(food[i] / 2));
  }

  return result + '0' + result.split('').reverse().join('');
}
