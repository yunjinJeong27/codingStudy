//  Enhanced for 문
//  for (타입 변수이름 : 배열이나컬렉션이름) {
//     배열의 길이만큼 반복적으로 실행하고자 하는 명령문;
// }

int[] arr = new int[]{1, 2, 3, 4, 5};

for (int e : arr) {
    System.out.print(e + " ");
} // 실행 결과: 1 2 3 4 5 


// for 문과 Enhanced for 문을 이용하여 모든 배열 요소에 10 더함.
int[] arr1 = new int[]{1, 2, 3, 4, 5};
int[] arr2 = new int[]{1, 2, 3, 4, 5};

for (int i = 0; i < arr1.length; i++) {
    arr1[i] += 10; // 각 배열 요소에 10을 더함.
} // 실행결과: 11 12 13 14 15

for (int e : arr2) {
    e += 10;       // 각 배열 요소에 10을 더함.
} // 실행결과: 1 2 3 4 5

// Enhance for 문 내부에서 사용되는 배열 요소는 배열 요소 그 자체가 아닌 배열 요소의 복사본이다.
// 따라서 Enhance for 문에서 배열 요소의 값을 변경하여도 원본 배열에는 아무런 영향을 주지 못한다.