# Write your MySQL query statement below
select name from (select e2.name as name ,count(*)as total from
employee e1
  join 
 employee e2 on e1.managerid=e2.id
 group by e1.managerid) as query where total>=5
 