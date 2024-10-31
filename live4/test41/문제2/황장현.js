const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const N = input[0][0];
  const friends = input.slice(1).map((row) => row[0].split(''));

  const people = Array.from({ length: N }, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  );

  const connections = {};

  for (let i = 0; i < friends.length; i++) {
    const node = people[i];
    connections[node] = [];

    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i][j] === 'Y') {
        connections[node].push(people[j]);
      }
    }
  }
  console.log(connections);
}

console.log(solution(input));
