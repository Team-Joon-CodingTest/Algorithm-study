function solution(wallpaper) {
  let x = [];
  let y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === '#') {
        x.push(i);
        y.push(j);
      }
    }
  }

  var answer = [
    Math.min(...x),
    Math.min(...y),
    Math.max(...x) + 1,
    Math.max(...y) + 1,
  ];

  return answer;
}

console.log(solution(['.#...', '..#..', '...#.']));
