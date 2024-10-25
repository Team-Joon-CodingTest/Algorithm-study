SELECT ROUND(
    (SELECT COUNT(*) FROM (
        SELECT d.customer_id
        FROM Delivery d
        INNER JOIN (
            SELECT customer_id, MIN(order_date) AS first_order_date
            FROM Delivery
            GROUP BY customer_id
        ) AS first_orders
        ON d.customer_id = first_orders.customer_id
        WHERE d.order_date = first_orders.first_order_date AND d.order_date = d.customer_pref_delivery_date
    ) AS immediate_orders) * 100.0 / 
    (SELECT COUNT(DISTINCT customer_id) FROM Delivery), 2) AS immediate_percentage;
