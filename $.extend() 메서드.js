// $.extend() 메소드는 두 개 이상의 객체의 모든 프로퍼티를 하나의 객체로 병합
// 인수로 전달받은 모든 객체의 프로퍼티를 첫 번째 객체에 모두 추가한다
$(function() {
    var example = {
        name: "예제",
        family: "프로퍼티 출력",
        age: 3
    }
    var owner = {
        name: "홍길동",
        region: "경기도",
        gender: "남자"
    }
    var puppy = { name: "강아지" }
 
    $("button").on("click", function() {
        // example 객체에 owner 객체와 puppy 객체의 모든 프로퍼티를 합침.
        $.extend(example, owner, puppy);
        $.each(example, function(key, value) {
            $("#text").append("해당 객체의 " + key + " 프로퍼티의 값은 " + value + "입니다.<br>");
        });
    });
});