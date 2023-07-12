// 인스턴스이름 instanceof 클래스또는인터페이스이름
// instanceof 연산자는 왼쪽 피연산자인 인스턴스가 오른쪽 피연산자인 클래스나 인터페이스로부터 
// 생성되었으면 true를 반환하고, 그렇지 않으면 false를 반환

class A {}
class B extends A {}
public static void main(String[] args) {
    A a = new A();
    B b = new B();
    System.out.println(a instanceof A); // true
    System.out.println(b instanceof A); // true
    System.out.println(a instanceof B); // false
    System.out.println(b instanceof B); // true
}