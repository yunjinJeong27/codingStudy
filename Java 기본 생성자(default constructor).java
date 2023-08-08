// Car 클래스에 생성자를 정의하지 않고, 기본 생성자를 호출
class Car {
    private String modelName = "소나타";
    private int modelYear = 2016;
    private String color = "파란색";
 
    public String getModel() {
        return this.modelYear + "년식 " + this.color + " " + this.modelName;
    }
}

public class Method03 {
    public static void main(String[] args) {
        Car myCar = new Car();                // 기본 생성자의 호출
        System.out.println(myCar.getModel()); // 2016년식 파란색 소나타
    }
}

// 실행결과: 2016년식 파란색 소나타