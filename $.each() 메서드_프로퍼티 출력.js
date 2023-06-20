// $.each() 메소드에 객체를 인수로 전달하여 객체의 각 프로퍼티를 출력
$(function() {
    var example = {
        name: "예제",
        family: "프로퍼티를 출력",
        age: 3
    }
    $("button").on("click", function() {
        $.each(example, function(key, value) {
            $("#text").append("해당 객체의 " + key + " 프로퍼티의 값은 " + value + "입니다.<br>");
        });
    });
});