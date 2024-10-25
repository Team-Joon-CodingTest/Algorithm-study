function solution(name, yearning, photo) {
  const yearningMap = {};
  const result = [];

  for (let i = 0; i < name.length; i++) {
    yearningMap[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let totalYearning = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (yearningMap[photo[i][j]]) {
        totalYearning += yearningMap[photo[i][j]];
      }
    }
    result.push(totalYearning);
  }

  return result;
}
