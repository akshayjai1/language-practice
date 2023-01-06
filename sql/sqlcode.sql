-- 183
select name as Customers from Customers where id not in (select customerId from Orders)
-- 584
select name from Customer where referee_id <> 2 or referee_id is Null
-- 595
select name, population, area from World where area >= 3000000 or population >= 25000000;
-- 1757
select product_id from Products where low_fats='Y' and recyclable='Y'