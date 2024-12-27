function solution(n, words) {
  const dict = new Set();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!dict.has(word)) {
      dict.add(word);
    } else {
      let num = (i + 1) % n;
      if (num === 0) num = n;
      const order = Math.ceil((i + 1) / n);

      return [num, order];
    }

    if (i > 0) {
      const prevWord = words[i - 1];
      const currentFirstAlphabet = word[0];
      const prevLastAlphabet = prevWord[prevWord.length - 1];

      if (prevLastAlphabet !== currentFirstAlphabet) {
        let num = (i + 1) % n;
        if (num === 0) num = n;
        const order = Math.ceil((i + 1) / n);

        return [num, order];
      }
    }
  }
  return [0, 0];
}

console.log(solution(3, ['abc', 'cbd', 'ddd', 'ddd', 'dbc', 'cbd']));
