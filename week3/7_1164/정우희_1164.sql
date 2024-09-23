# product 테이블에서 DISTINCT 키워드로 모든 product_id를 선택
# COALESCE 함수와 서브쿼리 사용해 각 product_id에 대해, 
# 주어진 날짜('2019-08-16') 이하의 가장 최근 change_date를 가진 new_price를 찾음
# 해당 product_id에 대해 change_date가 주어진 날짜 이하인 행이 없다면, 기본 가격인 10을 선택
SELECT DISTINCT 
    p1.product_id, 
    COALESCE( 
        (SELECT p2.new_price 
         FROM Products p2 
         WHERE p2.product_id = p1.product_id AND p2.change_date <= '2019-08-16' 
         ORDER BY p2.change_date DESC 
         LIMIT 1),
        10) AS price
FROM Products p1
