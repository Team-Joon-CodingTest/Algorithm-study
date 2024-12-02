function solution(ingredient) {
    const recipe = [1, 2, 3, 1];  // 햄버거의 재료 순서
    const curr = [];  // 현재 쌓인 재료들을 담는 배열
    let count = 0;  // 햄버거 개수를 셀 변수

    for (let i = 0; i < ingredient.length; i++) {
        curr.push(ingredient[i]);  // 재료를 curr에 추가

        // curr 배열의 마지막 4개가 [1, 2, 3, 1]과 일치하는지 확인
        if (curr.length >= 4 &&
            curr[curr.length - 4] === 1 &&
            curr[curr.length - 3] === 2 &&
            curr[curr.length - 2] === 3 &&
            curr[curr.length - 1] === 1) {

            // 햄버거 포장: 마지막 4개 재료를 제거
            curr.splice(curr.length - 4, 4);
            count++;  // 햄버거 개수 증가
        }
    }

    return count;  // 포장된 햄버거 개수 반환
}
