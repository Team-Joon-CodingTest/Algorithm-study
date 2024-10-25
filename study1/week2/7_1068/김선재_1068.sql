# Write your MySQL query statement below
SELECT product_name,
       year,
       price 
FROM   Product as p
INNER JOIN Sales as s
       on s.product_id=p.product_id