function solution(cacheSize, cities) {
  var answer = 0;
  cities = cities.map((el) => el.toLowerCase());

  let arr = new Map();

  for (let i = 0; i < cities.length; i++) {
    if (cities.length < 3) {
      if (!arr.has(cities[i])) {
        arr.set(cities[i]);
        answer += 5;
      } else {
        answer++;
      }
    } else {
      if (arr.has(cities[i])) {
        answer++;
      } else {
        const firstKey = arr.keys().next().value;
        arr.delete(firstKey);
        arr.set(cities[i]);

        answer += 5;
      }
    }
  }

  return answer;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
);
