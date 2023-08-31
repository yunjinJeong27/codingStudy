class Parent {
    int a;
    Parent() { a = 10; }
    Parent(int n) { a = n; }
}

class Child extends Parent {
    int b;
    Child() {
       //super(40);
        b = 20;
    }
    void display() {
        System.out.println(a);
        System.out.println(b);
    }
}
 
public class Inheritance04 {
    public static void main(String[] args) {
        Child ch = new Child();
        ch.display();
    }
}

// 실행 결과: 
// 10
// 20

// 자바 컴파일러는 주석 처리된 10번 라인에 자동으로 super(); 구문을 삽입할 것입니다.
// 따라서 변수 a는 10으로 초기화됩니다.

// 하지만 10번 라인의 주석 처리를 해제하고 실행하면, 부모 클래스인 Parent 클래스는 두 번째 생성자에 의해 초기화될 것입니다.
// 따라서 변수 a는 40으로 초기화됩니다.