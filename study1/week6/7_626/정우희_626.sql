SELECT
  CASE
    -- 짝수 ID의 경우 ID를 1 감소
    WHEN MOD(id, 2) = 0 THEN id - 1
    -- 홀수 ID이면서 마지막 ID가 아닌 경우 ID를 1 증가
    WHEN id <> (SELECT COUNT(*) FROM Seat) THEN id + 1
    -- 그 외의 경우(홀수 ID이면서 마지막 ID인 경우) ID는 그대로
    ELSE id
  END AS id,
  student
FROM Seat
-- 결과를 ID 순으로 정렬
ORDER BY id ASC;