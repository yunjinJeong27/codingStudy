// 문자열의 시작과 끝에 위치한 공백 문자(whitespace)를 제거한다
$(function() {
    $("button").on("click", function() {
        $("#text").html($.trim("   문자열의 시작과 끝에 위치한 공백 문자를 제거한다          "));
    });
});