// private 멤버는 해당 멤버를 선언한 클래스에서만 접근할 수 있다.
// 같은 클래스만 접근 허용
public class SameClass {
    private String var = "같은 클래스만 허용"; // private 필드
    private String getVar() {                  // private 메소드
        return this.var;
    }
}