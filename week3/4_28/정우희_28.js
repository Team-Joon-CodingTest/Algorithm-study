// 'haystack' 문자열 안에서 'needle' 문자열의 첫 등장 인덱스를 찾는 함수
var strStr = function (haystack, needle) {
  // needle이 빈 문자열인 경우 0을 반환
  if (needle === '') return 0;

  // haystack을 순회하면서 needle 문자열과 일치하는 부분을 찾음
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // 현재 인덱스에서 시작하는 haystack의 부분 문자열이 needle과 일치하는지 확인
    if (haystack.substring(i, i + needle.length) === needle) {
      return i; // 일치하는 경우 현재 인덱스 반환
    }
  }
  // 일치하는 부분이 없는 경우 -1 반환
  return -1;
};
