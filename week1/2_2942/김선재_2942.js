/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      // 해당문자열이 존재하면
      result.push(i); // 배열에 추가
    }
  }

  return result;
};
