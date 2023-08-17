// default 멤버는 같은 패키지에 속하는 클래스에서만 접근할 수 있다.
// 같은 패키지만 접근 허용
package test;

public class SamePackage {
    String sameVar = "같은 패키지는 허용"; // default 필드
}

// 같은 클래스도 접근 허용
package test;

public class SameClass {
    String var = "다른 패키지는 접근 불가"; // default 필드
    public static void main(String[] args) {
        SamePackage sp = new SamePackage();
        System.out.println(sp.sameVar);     // 같은 패키지는 허용
    }
}