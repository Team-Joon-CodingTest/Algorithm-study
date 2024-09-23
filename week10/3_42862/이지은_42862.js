function solution(n, lost, reserve) {
  // 모든 학생이 체육복을 가지고 있다고 가정
  const students = new Array(n).fill(1);

  // 체육복을 도난당한 학생 처리
  lost.forEach((l) => students[l - 1]--);

  // 여벌 체육복을 가진 학생 처리
  reserve.forEach((r) => students[r - 1]++);

  // 체육복 빌려주기
  students.forEach((s, i) => {
    if (s === 0) {
      // 앞 학생에게 빌리기
      if (i > 0 && students[i - 1] > 1) {
        students[i]++;
        students[i - 1]--;
      }
      // 뒷 학생에게 빌리기
      else if (i < n - 1 && students[i + 1] > 1) {
        students[i]++;
        students[i + 1]--;
      }
    }
  });

  // 체육복이 있는 학생 수 계산
  return students.filter((s) => s > 0).length;
}
