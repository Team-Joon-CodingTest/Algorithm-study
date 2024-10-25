# Write your MySQL query statement below
SELECT w1.id
FROM Weather as w1
JOIN Weather as w2 ON DATEDIFF(w1.recordDate, w2.recordDate) = 1 # w1과 하루 이전의 날짜를 가진 w2를 조인
WHERE w1.temperature > w2.temperature