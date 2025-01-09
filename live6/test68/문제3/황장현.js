function solution(s) {
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    let lowerWord = words[i].toLowerCase();
    if (/[a-z]/.test(lowerWord[0])) {
      lowerWord = lowerWord.replace(/^[a-z]/, (match) => match.toUpperCase());
    }
    words[i] = lowerWord;
  }
  return words.join(' ');
}

console.log(solution('3people unFollowed me'));
