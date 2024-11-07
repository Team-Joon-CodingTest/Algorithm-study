function solution(players, callings) {

    for(const name of callings) {
        const idx = players.indexOf(name);
        [players[idx-1], players[idx]] = [players[idx], players[idx-1]];
    }

    return players;
}