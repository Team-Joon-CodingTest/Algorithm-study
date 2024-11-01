const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const N = parseInt(input[0][0], 10);
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

  const twoFriends = {};

  for (let person of people) {
    const nearFriend = connections[person];

    const friendFriends = new Set(nearFriend);

    for (let friend of nearFriend) {
      const friendsOfFriend = connections[friend];

      for (let twoFriend of friendsOfFriend) {
        if (twoFriend !== person) {
          friendFriends.add(twoFriend);
        }
      }
    }

    twoFriends[person] = friendFriends.size;
  }

  const maxTwoFriends = Math.max(...Object.values(twoFriends));

  return maxTwoFriends;
}

console.log(solution(input));
