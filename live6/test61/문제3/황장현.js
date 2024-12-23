function solution(citations) {
  const sum = citations.reduce((prefix, curr) => prefix + curr, 0);
  while (1) {
    const H_Index = sum / citations.length;
    let plus = 0;
    let minus = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= H_Index) plus++;
      else minus++;
    }
    if (plus === H_Index) return plus;
  }
}

console.log(solution([3, 0, 6, 1, 5]));
