char ch1 = 'b', ch2 = 'B';
boolean result1, result2;

result1 = (ch1 > 'a') && (ch1 < 'z') ;
result2 = (ch2 < 'A') || (ch2 < 'Z') ;

System.out.println("&& 연산자에 의한 결과 : "+ result1);
// && 연산자에 의한 결과 : true

System.out.println("|| 연산자에 의한 결과 : "+ result2);
// || 연산자에 의한 결과 : true

System.out.println("! 연산자에 의한 결과 : "+ !result2);
// !  연산자에 의한 결과 : false