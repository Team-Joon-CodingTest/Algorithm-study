SELECT 
    p.product_id,
    s.first_year,
    s.quantity,
    s.price
FROM 
    (SELECT product_id FROM Product) p
JOIN 
    (SELECT 
        product_id,
        year AS first_year,
        quantity,
        price
    FROM 
        Sales
    WHERE 
        (product_id, year) IN (SELECT product_id, MIN(year) FROM Sales GROUP BY product_id)
    ) s ON p.product_id = s.product_id;
