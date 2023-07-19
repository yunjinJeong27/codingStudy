int i = 1, j = 1;
 
while (i < 1) {
    System.out.println("while 문이 " + i + "번째 반복 실행중입니다.");
    i++; // 이 부분을 삭제하면 무한 루프에 빠지게 됨.
}
System.out.println("while 문이 종료된 후 변수 i의 값은 " + i + "입니다.");
 
do {
    System.out.println("do / while 문이 " + i + "번째 반복 실행중입니다.");
    j++; // 이 부분을 삭제하면 무한 루프에 빠지게 됨.
} while (j < 1);
System.out.println("do / while 문이 종료된 후 변수 j의 값은 " + j + "입니다.");

// 실행 결과: 
// while 문이 종료된 후 변수 i의 값은 1입니다.
// do / while 문이 1번째 반복 실행중입니다.
// do / while 문이 종료된 후 변수 j의 값은 2입니다.