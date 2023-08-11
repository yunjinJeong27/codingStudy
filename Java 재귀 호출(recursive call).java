// 1부터 n까지의 합을 구하는 메소드
int sum(int n) {
    int result = 0;

    for (int i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

// 재귀 호출
int recursiveSum(int n) {
    if (n == 1) {                 // n이 1이면, 그냥 1을 반환함.
        return 1;
    }
    return n + recursiveSum(n-1); // n이 1이 아니면, n을 1부터 (n-1)까지의 합과 더한 값을 반환함.
}

// 실행 결과: 55