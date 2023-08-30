class Parent {
    int a = 10;
} 

class Child extends Parent {
    int a = 20;

    void display() {
        System.out.println(a);
        System.out.println(this.a);
        System.out.println(super.a);
    }
}

public class Inheritance03 {
    public static void main(String[] args) {
        Child ch = new Child();
        ch.display();
    }
}

// 실행결과: 
// 20
// 20
// 10