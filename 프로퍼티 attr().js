$(function() {
    $("#setBtn").on("click", function() {
        $("#example").attr("title", "안녕하세요") // id가 "example"인 요소에 title 속성을 설정함.
        .css("color", "blue");                   // 해당 요소의 CSS 스타일을 설정함.
    });
    $("#removeBtn").on("click", function() {
        $("#example").removeAttr("title") // 해당 요소에서 title 속성을 제거함.
            .css("color", "green");
    });
});