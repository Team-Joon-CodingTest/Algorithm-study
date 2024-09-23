/* 16일에 가장 근접한 날짜의 가격 */
SELECT product_id, new_price AS price
FROM (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY change_date DESC) AS recent_date
    FROM products
    WHERE change_date <= '2019-08-16'
) AS t
WHERE recent_date = 1

UNION

/* 모든 제품의 가격을 변경하기 전에 10이라고 가정 */
/* 16일 이전의 값이 없는 상품에 값(10) 설정 */
SELECT product_id, 10 AS price
FROM products
GROUP BY product_id
HAVING MIN(change_date) > '2019-08-16'