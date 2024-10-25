function solution(s) {
  if (s.length === 1) return 1;

  let minLength = s.length;

  for (let size = 1; size <= Math.floor(s.length / 2); size++) {
    let compressed = ''; // 압축 결과를 저장할 문자열
    let prevChunk = s.substring(0, size); // 처음 조각
    let count = 1;

    // 문자열을 현재 조각 크기로 순회하는 반복문
    for (let j = size; j <= s.length; j += size) {
      let currentChunk = s.substring(j, j + size); // 현재 조각
      if (prevChunk === currentChunk) {
        count++; // 처음 조각과 현재 조각이 같으면 카운트를 증가
      } else {
        // 다른 조각을 만나면 지금까지의 결과를 압축 문자열에 추가
        if (count > 1) compressed += count.toString(); // 반복된 횟수가 1보다 크면 횟수를 문자열에 추가합니다.
        compressed += prevChunk; // 조각 자체를 압축 문자열에 추가
        prevChunk = currentChunk; // 이전 조각을 현재 조각으로 업데이트
        count = 1;
      }
    }

    // 마지막으로 처리된 조각을 압축 문자열에 추가
    if (count > 1) compressed += count.toString(); // 마지막 조각의 반복 횟수를 추가
    compressed += prevChunk; // 마지막 조각 자체를 추가

    // 찾은 압축 문자열 중 가장 짧은 길이를 갱신
    minLength = Math.min(minLength, compressed.length);
  }

  return minLength;
}
