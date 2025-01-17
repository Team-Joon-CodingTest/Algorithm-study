function solution(topping) {
  var answer = 0;

  let left = [];
  let right = topping.slice(0);

  let lmap = new Map();
  let rmap = new Map();

  for (r of right) {
    rmap.set(r, (rmap.get(r) || 0) + 1);
  }

  for (let i = 0; i < topping.length; i++) {
    lmap.set(topping[i], (lmap.get(topping[i]) || 0) + 1);
    rmap.set(topping[i], rmap.get(topping[i]) - 1);

    if (rmap.get(topping[i]) === 0) {
      rmap.delete(topping[i]);
    }

    if (lmap.size === rmap.size) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
