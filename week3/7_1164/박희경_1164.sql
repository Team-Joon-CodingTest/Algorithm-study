select
    product_id,
    coalesce (
            (select new_price
             from products
             where product_id = p.product_id
               and change_date <= '2019-08-16'
             order by change_date DESC limit 1), 
            10) as price
from (SELECT DISTINCT product_id FROM products) p;