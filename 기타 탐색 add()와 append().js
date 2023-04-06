// add() 메소드는 선택한 '요소의 집합'에 인수로 전달받은 요소를 추가하는 메소드
$(function() {
    $("button").on("click", function() {
        $("li").add("p")                         // 선택한 <li>요소의 집합에 <p>요소를 추가함.
            .css({"border": "5px solid red"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});

// append() 메소드는 선택한 '요소'의 마지막에 새로운 요소나 콘텐츠를 추가하는 메소드
$(function() {
    $("button").on("click", function() {
        $("#item").append("<li>새로 추가된 아이템</li>");
    });
});