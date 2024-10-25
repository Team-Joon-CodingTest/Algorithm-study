-- 소수점 둘째 자리까지 반올림된 즉시 주문의 비율을 계산
SELECT ROUND(
    -- 즉시 주문의 수를 첫 주문의 총 수로 나눈 후 100을 곱해 비율을 구함
    (COUNT(CASE WHEN D.order_date = D.customer_pref_delivery_date THEN 1 END) * 100.0) /
    COUNT(D.delivery_id),
    2) AS immediate_percentage
FROM (
    -- 각 고객의 첫 주문 정보
    SELECT customer_id, MIN(order_date) AS first_order_date
    FROM Delivery
    GROUP BY customer_id
) AS FirstOrders
JOIN Delivery D ON FirstOrders.customer_id = D.customer_id AND FirstOrders.first_order_date = D.order_date;