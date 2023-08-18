// protected 멤버는 같은 패키지에 속하는 클래스와 다른 패키지에 속하는 자식 클래스에서만 접근할 수 있다.
// 같은 패키지는 접근 허용
package test;

public class SameClass {
    protected String sameVar = "다른 패키지에 속하는 자식 클래스까지 허용"; // protected 필드
}

// 다른 패키지에 속하는 자식 클래스도 접근 허용
package test.other;
import test.SameClass; // test 패키지의 SameClass 클래스를 불러들여 포함시킴.

public class ChildClass extends SameClass {
    public static void main(String[] args) {
        SameClass = new SameClass();
        System.out.println(sp.sameVar); // 다른 패키지에 속하는 자식 클래스까지 허용
    }
}