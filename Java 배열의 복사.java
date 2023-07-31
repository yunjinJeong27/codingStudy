int[] arr1 = new int[]{1, 2, 3, 4, 5};
int newLen = 10;

// 1. System 클래스의 arraycopy() 메소드
int[] arr2 = new int[newLen];
System.arraycopy(arr1, 0, arr2, 0, arr1.length);

// 2. Arrays 클래스의 copyOf() 메소드
int[] arr3 = Arrays.copyOf(arr1, 10);

// 3. Object 클래스의 clone() 메소드
// clone() 메소드는 이전 배열과 같은 길이의 배열밖에 만들 수 없다.
int[] arr4 = (int[])arr1.clone();

// 4. for 문과 인덱스를 이용한 복사
int[] arr5 = new int[newLen];

//실행 결과
// 1 2 3 4 5 0 0 0 0 0 
// 1 2 3 4 5 0 0 0 0 0 
// 1 2 3 4 5 
// 1 2 3 4 5 0 0 0 0 0 