final class Car {                    // 이 클래스는 상속을 통해 서브 클래스를 생성할 수 없음.
    final int VAR;                   // 이 필드는 상수화되어 값을 변경할 수 없음.
    final void brake() {             // 이 메소드는 오버라이딩을 통해 재정의할 수 없음.
        final double MAX_NUM = 10.2; // 이 지역 변수는 상수화되어 값을 변경할 수 없음.
    }
}