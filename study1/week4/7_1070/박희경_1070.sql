SELECT s.product_id, s.year as first_year, s.quantity, s.price
FROM SALES s
WHERE
    (product_id, year) IN (
        SELECT
            product_id,
            MIN(year) AS year
        FROM Sales
        GROUP BY product_id
    )