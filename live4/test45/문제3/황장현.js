function solution(today, terms, privacies) {
  var answer = [];
  const map = new Map(
    terms.map((item) => {
      const [key, value] = item.split(' ');
      return [key, Number(value)];
    })
  );

  for (const privacy of privacies) {
    const [date, term] = privacy.split(' ');
  }

  return answer;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
  )
);
