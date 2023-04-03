$(function() {
    $("button").on("click", function() {
        $("h1").siblings()                 // <h1>요소의 형제 요소를 모두 선택함.
        .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});