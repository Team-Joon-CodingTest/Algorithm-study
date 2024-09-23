var maxVowels = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxCount = 0;
  let currentCount = 0;

  // 첫 번째 윈도우 내의 모음 수를 카운팅
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currentCount++;
  }

  maxCount = currentCount;

  // 슬라이딩 윈도우를 이용하여 나머지 문자열을 탐색
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) currentCount++;
    if (vowels.has(s[i - k])) currentCount--;

    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
};
