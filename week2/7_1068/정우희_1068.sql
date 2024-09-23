SELECT Product.product_name, Sales.year, Sales.price # 필요한 컬럼을 선택
FROM Sales # Sales 테이블을 지정
JOIN Product ON Sales.product_id = Product.product_id;
# JOIN으로 Product 테이블을 Sales 테이블에 결합
# ON으로 Sales와 Product에서 product_id가 일치하는 행을 결합