function solution(board, moves) {
  let answer = 0;
  const basket = [];

  for (let move of moves) {
    const column = move - 1;
    let pickedDoll = 0;

    for (let i = 0; i < board.length; i++) {
      if (board[i][column] !== 0) {
        pickedDoll = board[i][column];
        board[i][column] = 0;
        break;
      }
    }

    if (pickedDoll !== 0) {
      if (basket.length > 0 && basket[basket.length - 1] === pickedDoll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(pickedDoll);
      }
    }
  }

  return answer;
}
