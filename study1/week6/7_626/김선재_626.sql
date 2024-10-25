# Write your MySQL query statement below

# 조건에 따라 id를 초기화
    #1: 번호가 홀수, id != 전체 학생 수 : id++
    #2: 번호가 홀수, id != 전체 학생 수 : id=id
    #3: 번호가 짝수 : id--
# id를 오름차순 정렬
SELECT
    (CASE
        WHEN MOD(id, 2) != 0 AND (SELECT COUNT(*) FROM seat) != id THEN id + 1
        WHEN MOD(id, 2) != 0 AND (SELECT COUNT(*) FROM seat) = id THEN id
        ELSE id - 1
     END) AS id,
    student
FROM
    seat
ORDER BY id ASC;
