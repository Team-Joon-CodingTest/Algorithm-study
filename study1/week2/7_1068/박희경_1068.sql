SELECT p.product_name, s.year, s.price
FROM SALES s, Product p
WHERE s.product_id = p.product_id;