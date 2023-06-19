// $.each() 메서드에 배열을 인수로 전달하여 각 배열 요소를 출력
$(function() {
    $("button").on("click", function() {
        $.each([1, true, "JQuery"], function(index, value) {
            $("#text").append("배열의 " + (index + 1) + "번째 요소의 값은 " + value + "입니다.<br>");
        });
    });
});