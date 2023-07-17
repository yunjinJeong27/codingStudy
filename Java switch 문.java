switch (ch) {
    case 'a':
        System.out.println("해당 문자는 'A'입니다.");
        break;
    case 'e':
        System.out.println("해당 문자는 'E'입니다.");
        break;
    case 'i':
        System.out.println("해당 문자는 'I'입니다.");
        break;
    case 'o':
        System.out.println("해당 문자는 'O'입니다.");
        break;
    case 'u':
        System.out.println("해당 문자는 'U'입니다.");
        break;
    default:
        System.out.println("해당 문자는 모음이 아닙니다.");
        break;
} //해당 문자는 'I'입니다.


switch (ch) {
    case 'a':
        System.out.println("해당 문자는 'A'입니다.");
    case 'e':
        System.out.println("해당 문자는 'E'입니다.");
    case 'i':
        System.out.println("해당 문자는 'I'입니다.");
    case 'o':
        System.out.println("해당 문자는 'O'입니다.");
    case 'u':
        System.out.println("해당 문자는 'U'입니다.");
    default:
        System.out.println("해당 문자는 모음이 아닙니다.");
}   // 해당 문자는 'I'입니다.
    // 해당 문자는 'O'입니다.
    // 해당 문자는 'U'입니다.
    // 해당 문자는 모음이 아닙니다.


switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        System.out.println("해당 문자는 소문자 모음입니다.");
        break;
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        System.out.println("해당 문자는 대문자 모음입니다.");
        break;
    default:
        System.out.println("해당 문자는 모음이 아닙니다.");
        break;
} //해당 문자는 대문자 모음입니다.