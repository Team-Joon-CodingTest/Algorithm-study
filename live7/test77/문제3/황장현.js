function solution(fees, records) {
  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
  const lists = {};
  const carNumbers = new Set();
  records.forEach((list) => {
    const [시각, 차량번호, 내역] = list.split(' ');
    const [시, 분] = 시각.split(':').map(Number);
    const 시를분으로 = 시 * 60 + 분;

    if (!lists[차량번호]) lists[차량번호] = [];
    carNumbers.add(차량번호);

    lists[차량번호].push([시를분으로, 내역]);
  });

  carNumbers.forEach((carNumber) => {
    const list = lists[carNumber];
    let time = 0;
    let isOut = false;
    list.forEach((hist) => {
      const [시각, 내역] = hist;
      if (내역 === 'IN') {
        time -= 시각;
        isOut = false;
      } else {
        isOut = true;
        time += 시각;
      }
    });
    if (isOut === false) time += 1439;
    lists[carNumber] = time;
  });

  const sortedData = Object.entries(lists).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  const result = [];
  sortedData.forEach((data) => {
    const [carNumber, time] = data;
    if (time <= 기본시간) {
      result.push(기본요금);
    } else {
      result.push(
        기본요금 + Math.ceil((time - 기본시간) / 단위시간) * 단위요금
      );
    }
  });
  return result;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);

// 기본시간 이하면 기본요금
// 기본시간 초과면 기본요금 + 초과한 시간(분) * 단위요금
// 초과한 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림
