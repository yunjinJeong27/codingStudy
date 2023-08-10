//메소드 오버로딩
void display(int num1)              // 1.전달받은 num1을 그대로 출력함.

void display(int num1, int num2)    // 2.전달받은 두 정수의 곱을 출력함.

void display(int num1, double num2) // 3.전달받은 정수와 실수의 합을 출력함.

// 1. display(10);       // 1번 display() 메소드 호출 -> 10
// 2. display(10, 20);   // 2번 display() 메소드 호출 -> 200
// 3. display(10, 3.14); // 3번 display() 메소드 호출 -> 13.14

// 4. display(10, 'a');  // 2번과 3번 모두 호출 가능
//(첫 번째 인수로는 정수를, 두 번째 인수로는 실수를 전달받는 호출 - 자바에서 char형 데이터는 int형 뿐만 아니라 double형으로도 타입 변환될 수 있다.)