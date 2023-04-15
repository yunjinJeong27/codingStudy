$(function() {
    $("button").on("click", function() {
        // id가 "item"인 요소가 위치할 때 기준이 된 조상 요소를 선택함.
        $("#item").offsetParent()
            .css("border", "1px solid red"); // 해당 요소의 CSS 스타일을 변경함.
    });
});