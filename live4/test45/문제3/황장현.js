function solution(today, terms, privacies) {
  let answer = [];
  const map = new Map(
    terms.map((item) => {
      const [key, value] = item.split(' ');
      return [key, Number(value)];
    })
  );

  const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
  const todayInDays = todayYear * 12 * 28 + todayMonth * 28 + todayDay;

  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(' ');
    const [year, month, day] = date.split('.').map(Number);

    const monthsToAdd = map.get(term);
    const expiryInDays = year * 12 * 28 + (month + monthsToAdd) * 28 + day - 1;

    if (todayInDays > expiryInDays) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
  )
);
