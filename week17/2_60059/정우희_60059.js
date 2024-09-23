function solution(key, lock) {
  const M = key.length;
  const N = lock.length;

  const newLock = Array.from(Array(N * 3), () => Array(N * 3).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      newLock[i + N][j + N] = lock[i][j];
    }
  }

  const rotateKey = (key) => {
    const rotatedKey = Array.from(Array(M), () => Array(M).fill(0));
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < M; j++) {
        rotatedKey[j][M - 1 - i] = key[i][j];
      }
    }
    return rotatedKey;
  };

  const check = (newLock, key) => {
    const len = newLock.length / 3;

    for (let x = 0; x < len * 2; x++) {
      for (let y = 0; y < len * 2; y++) {
        for (let i = 0; i < M; i++) {
          for (let j = 0; j < M; j++) {
            newLock[x + i][y + j] += key[i][j];
          }
        }

        let isMatched = true;
        for (let i = len; i < len * 2; i++) {
          for (let j = len; j < len * 2; j++) {
            if (newLock[i][j] !== 1) {
              isMatched = false;
              break;
            }
          }
          if (!isMatched) break;
        }

        for (let i = 0; i < M; i++) {
          for (let j = 0; j < M; j++) {
            newLock[x + i][y + j] -= key[i][j];
          }
        }

        if (isMatched) return true;
      }
    }

    return false;
  };

  for (let rotate = 0; rotate < 4; rotate++) {
    if (check(newLock, key)) return true;
    key = rotateKey(key);
  }

  return false;
}
