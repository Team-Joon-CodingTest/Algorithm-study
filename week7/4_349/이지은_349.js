var intersection = function (nums1, nums2) {
  // 유일한 값만을 저장하기 위한 Set 객체
  let setNums1 = new Set(nums1);
  let setNums2 = new Set(nums2);

  // 교집합을 찾기 위한 배열
  let intersection = [];

  // setNums1의 각 요소에 대해, setNums2에도 해당 요소가 있는지 확인
  setNums1.forEach((num) => {
    if (setNums2.has(num)) {
      intersection.push(num); // 교집합에 추가
    }
  });

  return intersection; // 교집합 반환
};
