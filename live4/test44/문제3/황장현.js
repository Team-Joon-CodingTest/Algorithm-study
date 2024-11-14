function solution(players, callings) {
  const map = new Map();

  for (let i = 0; i < players.length; i++) {
    map.set(players[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    const currentCallPlayer = callings[i];
    const callPlayerIndex = map.get(currentCallPlayer);

    const backPlayer = players[callPlayerIndex - 1];

    map.set(currentCallPlayer, callPlayerIndex - 1);
    map.set(backPlayer, callPlayerIndex);

    players[callPlayerIndex - 1] = currentCallPlayer;
    players[callPlayerIndex] = backPlayer;
  }

  var answer = players;
  return answer;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
