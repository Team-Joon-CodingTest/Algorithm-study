function solution(nums) {
  const uniquePokemonTypes = new Set(nums).size; // 중복 제거
  const maxSelectable = nums.length / 2; // 선택할 수 있는 폰켓몬의 최대 수
  return Math.min(uniquePokemonTypes, maxSelectable); // 둘 중 더 작은 값
}
