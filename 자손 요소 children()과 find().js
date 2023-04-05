$(function() {
    $("button").on("click", function() {
        $("ul").children()                         // <ul>요소의 자식 요소를 모두 선택함.
            .css({"border": "10px solid green"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});

$(function() {
    $("button").on("click", function() {
        $("li").find("*")                            // 각 <li>요소의 자손 요소을 모두 선택함.
            .css({"border": "10px solid green"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});