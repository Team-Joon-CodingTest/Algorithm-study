/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // needle이 빈 문자열인 경우, 항상 0을 반환
  if (needle === '') {
    return 0;
  }

  // haystack을 순회하면서 needle과 같은 부분 문자열이 있는지 확인
  for (let i = 0; i < haystack.length; i++) {
    // 현재 위치에서 needle의 길이만큼의 부분 문자열이 needle과 같은지 확인
    if (haystack.substring(i, i + needle.length) === needle) {
      return i; // 같다면 현재 인덱스 반환
    }
  }

  // needle을 찾지 못한 경우 -1 반환
  return -1;
};
