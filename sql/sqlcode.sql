-- 175
select p.firstName, p.lastName, a.city, a.state from Person p left join Address a on p.personId = a.personId
-- 176
select max(salary) as SecondHighestSalary from employee where salary < (select max(salary) from employee)
-- 182
select email from person group by email having count(*) > 1
-- 183
select name as Customers from Customers where id not in (select customerId from Orders)
-- 196
DELETE p1 from Person p1, Person p2 WHERE p1.id > p2.id and p1.email = p2.email
-- 197
select w1.id from Weather w1, Weather w2 where w1.temperature > w2.temperature and to_days(w1.recordDate) - to_days(w2.recordDate) = 1
-- 511
select player_id, min(event_date) as first_login from Activity group by player_id
-- 584
select name from Customer where referee_id <> 2 or referee_id is Null
-- 586
select customer_number from Orders group by customer_number order by count(*) desc limit 1

-- 595
select name, population, area from World where area >= 3000000 or population >= 25000000;

-- 607
select name from salesperson where sales_id not in (select sales_id from Orders where com_id in (select com_id from Company where name = 'RED') )
-- 608
select distinct t1.id, (
    case when t1.p_id is Null then 'Root'
    when t1.p_id is not null and t2.id is not null then 'Inner'
    when t1.p_id is not null and t2.id is null then 'Leaf'
    end
) as type from Tree t1 left join tree t2
on t1.id = t2.p_id

-- 627
update salary set sex = IF(sex = 'm','f','m')
update salary set sex= CHAR(ASCII('f') + ASCII('m') - ASCII(sex));
-- 1050
select actor_id, director_id from ActorDirector group by actor_id, director_id having count(1) >= 3
-- 1084
select a.product_id, a.product_name from Product a inner join Sales b on a.product_id = b.product_id group by a.product_id having min(b.sale_date) >='2019-01-01' and max(b.sale_date) <='2019-03-31'
-- 1141 https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/1961049/just-do-what-is-asked-step-by-step/
select activity_date as day, count(distinct user_id) as active_users from activity where (activity_date > '2019-06-27' and activity_date <= '2019-07-27') group by activity_date
-- 1148
select distinct author_id as id from Views where author_id = viewer_id order by id asc
-- 1158
select u.user_id as buyer_id, u.join_date, ifnull(count(order_date),0)  as orders_in_2019 from
users u left join orders o on u.user_id = o.buyer_id and year(order_date) = '2019' group by u.user_id
-- 1393
select stock_name, sum(
    case
        when operation = 'Buy' then  -price
        else price
    end
) as capital_gain_loss from Stocks
group by stock_name
-- 1407
select u.name, ifnull(sum(r.distance),0) as travelled_distance
from users u left join Rides r on u.id = r.user_id group by u.id order by travelled_distance desc, u.name asc
-- 1484
select sell_date, count(distinct product) as num_sold, group_concat(distinct product order by product separator ',') as products from activities group by sell_date order by sell_date asc
-- 1527
select patient_id, patient_name, conditions from Patients where conditions like 'DIAB1%' OR conditions like '% diab1%'
-- 1581
select customer_id, count(visit_id) as count_no_trans from visits where visit_id not in (select visit_id from transactions) group by customer_id
-- 1587
select u.name, sum(t.amount) balance from Users u inner join Transactions t on u.account = t.account
group by u.account having balance > 10000
select u.name, T.balance from Users u inner join
(select trans_id, account, sum(amount) as balance from Transactions group by account having sum(amount) > 10000) as T on u.account = T.account
-- 1667
select user_id, concat(upper(substr(name,1,1)),lower(substr(name,2))) as name from Users order by user_id
-- 1693
select date_id, make_name, count(distinct lead_id) as unique_leads, count(distinct partner_id) as unique_partners
from dailysales group by 1,2
-- 1729
select user_id, count(distinct follower_id) as followers_count from Followers group by user_id order by user_id
-- 1741
select event_day as day, emp_id, sum(out_time - in_time) as total_time from Employees group by event_day, emp_id
-- 1757
select product_id from Products where low_fats='Y' and recyclable='Y'
-- 1795
SELECT product_id, 'store1' AS store, store1 AS price FROM Products WHERE store1 IS NOT NULL
UNION
SELECT product_id, 'store2' AS store, store2 AS price FROM Products WHERE store2 IS NOT NULL
UNION
SELECT product_id, 'store3' AS store, store3 AS price FROM Products WHERE store3 IS NOT NULL
-- 1873
select employee_id, salary * (employee_id % 2 == 0) * (name like 'M%') as bonus from Employees ORDER BY employee_id
select employee_id , case when employee_id%2 <>0 and name not like 'M%' then salary else 0 end as bonus from employees order by employee_id;
-- 1890
select user_id, max(time_stamp) as last_stamp from Logins where time_stamp >= '2020-01-01 00:00:00' and time_stamp < '2021-01-01 00:00:00' group by user_id
select user_id, max(time_stamp) as last_stamp from Logins where time_stamp like '2020%' group by user_id

-- 1965 : https://leetcode.com/problems/employees-with-missing-information/solutions/1946042/implementing-full-join-in-mysql/
-- implementing outer join using union
SELECT T.employee_id FROM
  (SELECT * FROM Employees LEFT JOIN Salaries USING(employee_id)
   UNION
   SELECT * FROM Employees RIGHT JOIN Salaries USING(employee_id))
AS T WHERE T.salary IS NULL OR T.name IS NULL ORDER BY employee_id;

SELECT employee_id FROM Employees WHERE employee_id NOT IN (SELECT employee_id FROM Salaries)
UNION
SELECT employee_id FROM Salaries WHERE employee_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY 1 ASC