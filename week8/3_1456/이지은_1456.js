var maxVowels = function (s, k) {
  let maxCount = 0;
  let currentCount = 0;

  // 모음을 확인하는 함수
  const isVowel = (char) => 'aeiou'.includes(char);

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) currentCount++;
  }
  maxCount = currentCount;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) currentCount++;
    if (isVowel(s[i - k])) currentCount--;
    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
};
