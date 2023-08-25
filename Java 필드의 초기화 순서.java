// 필드의 초기화 순서
//클래스 변수 : 기본값 → 명시적 초기화 → 클래스 초기화 블록
//인스턴스 변수 : 기본값 → 명시적 초기화 → 인스턴스 초기화 블록 → 생성자

class InitBlock {
    static int classVar = 10;         // 클래스 변수의 명시적 초기화
    int instanceVar = 10;             // 인스턴스 변수의 명시적 초기화
    static { classVar = 20; }         // 클래스 초기화 블록을 이용한 초기화
    { instanceVar = 20; }             // 인스턴스 초기화 블록을 이용한 초기화
    InitBlock() { instanceVar = 30; } // 생성자를 이용한 초기화
}

public class Member05 {
    public static void main(String[] args) {
        System.out.println(InitBlock.classVar);
        InitBlock myInit = new InitBlock();
        System.out.println(myInit.instanceVar);
    }
}

//실행 결과: 
// 20
// 30