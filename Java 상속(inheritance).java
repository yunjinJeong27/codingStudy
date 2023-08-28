class Parent {
    private int a = 10; // private 필드
    public int b = 20;  // public 필드
}
 
class Child extends Parent {
    public int c = 30;  // public 필드
    void display() {
      // System.out.println(a); // 상속받은 private 필드 참조 (부모 클래스의 private 필드라면 접근할 수 없으므로, 오류)
      System.out.println(b);    // 상속받은 public 필드 참조
      System.out.println(c);    // 자식 클래스에서 선언한 public 필드 참조
    }
}
 
public class Inheritance01 {
    public static void main(String[] args) {
        Child ch = new Child();
        ch.display();
    }
}

// 실행결과: 
// 20
// 30