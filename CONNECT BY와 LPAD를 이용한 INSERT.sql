INSERT INTO GROUPA (
    CUST_ID,
    USE_YN,
    USER_NM,   
    REG_EMP_ID,
    REG_DT,
    UPD_EMP_ID,
    UPD_DT
)
SELECT 
    '91' || lpad(level, 10, '0'),
    'Y',
    'ADMIN',
    '1234',
    SYSDATE,
    '1234',
    SYSDATE
FROM DUAL CONNECT BY LEVEL <=100;