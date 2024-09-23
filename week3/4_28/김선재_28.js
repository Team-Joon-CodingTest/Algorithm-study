/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // needle이 빈 문자열 -> haystack 전체가 needle에 포함
  if (needle.length === 0) {
    return 0;
  }

  // substirng 경우
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  // substring 아닌 경우
  return -1;
};
