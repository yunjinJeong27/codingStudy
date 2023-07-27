//배열 요소의 합과 평균
int[] grade = new int[]{85, 65, 90}; // 길이가 3인 int형 배열을 선언과 동시에 초기화
int sum = 0;

for (int i = 0; i < grade.length; i++) {
    sum += grade[i];
}
System.out.println("모든 과목에서 받은 점수의 합은 " + sum + "입니다.");
System.out.println("이 학생의 평균은 " + (sum / grade.length) + "입니다.");

//실행 결과
// 모든 과목에서 받은 점수의 합은 240입니다.
// 이 학생의 평균은 80입니다.