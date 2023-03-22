WITH emp AS (
    SELECT '1234' empno, 'AAA' ename, '10' deptno FROM dual
)

SELECT empno
     , ename
     , deptno
     , LPAD(deptno, 5)      -- 왼쪽에 공백을 채움'   30'
     , LPAD(deptno, 5, ' ') -- 왼쪽에 공백을 채움'   30'
     , LPAD(deptno, 5, '0') -- 왼쪽에 '0'을 채움 '00030'
     , LPAD(deptno, 5, 'A') -- 왼쪽에 'A'를 채움 'AAA30'
  FROM emp


  