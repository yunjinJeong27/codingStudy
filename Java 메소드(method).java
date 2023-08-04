//accelerate() 메소드를 정의하고 호출
class Car {
    private int currentSpeed;
    private int accelerationTime;

    public void accelerate(int speed, int second) {
        System.out.println(second + "초간 속도를 시속 " + speed + "(으)로 가속함!!");
    }
}

public class Method01 {
    public static void main(String[] args) {
        Car myCar = new Car();   // 객체 생성
        myCar.accelerate(60, 3); // 메소드 호출
    }
}

// 실행 결과: 3초간 속도를 시속 60(으)로 가속함!!