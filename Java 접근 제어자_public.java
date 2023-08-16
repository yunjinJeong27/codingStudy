// public 멤버는 프로그램 어디에서 누구나 접근할 수 있다.
public class Everywhere {
    public String var = "누구든지 허용"; // public 필드
    public String getVar() {             // public 메소드
        return this.var;
    }
}