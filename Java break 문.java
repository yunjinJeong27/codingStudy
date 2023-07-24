//1부터 100까지의 합을 무한 루프를 통해 구하는 예제
int num = 1, sum = 0;

while (true) { // 무한 루프
    sum += num;
    if (num == 100) {
        break;
    }
    num++;
}
System.out.println(sum);

//실행결과
//5050