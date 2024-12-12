function solution(k, tangerine) {
  let answer = 0;
  const sizes = {};

  tangerine.forEach((t) => (sizes[t] = (sizes[t] || 0) + 1));

  const fruits = Object.values(sizes).sort((a, b) => b - a);

  for (const fruit of fruits) {
    answer++;
    if (k > fruit) k -= fruit;
    else break;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
