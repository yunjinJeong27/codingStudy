// 전달받은 값을 배열에서 검색한 후, 값이 일치하는 요소의 인덱스를 반환한다
// 만약 배열에 전달받은 값과 일치하는 요소가 없으면 -1을 반환한다

$(function() {
    $("button").on("click", function() {
        var arr = [1, true, "JQuery"];
        $("#text").html("해당 요소의 인덱스는 " + $.inArray(true, arr) + "입니다.");
    });
});