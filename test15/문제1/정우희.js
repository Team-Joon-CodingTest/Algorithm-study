const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, gameType] = input[0].split(' ');
  const participants = new Set(input.slice(1));

  let maxGames = 0;

  if (gameType === 'Y') {
    maxGames = participants.size;
  } else if (gameType === 'F') {
    maxGames = Math.floor(participants.size / 2);
  } else if (gameType === 'O') {
    maxGames = Math.floor(participants.size / 3);
  }

  console.log(maxGames);
}

solution(input);
