$(function() {
    $("button").on("click", function() {
        $("p").parent()                        // <p>요소의 부모 요소를 선택함.
            .css({"border": "10px solid blue"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});

$(function() {
    $("button").on("click", function() {
        $("p").parents("div")                  // <p>요소의 조상 요소 중에서 <div>요소를 모두 선택함.
            .css({"border": "10px solid blue"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});

$(function() {
    $("button").on("click", function() {
        // <p>요소의 조상 요소 중에서 첫 번째 <div>요소의 바로 이전까지의 요소를 모두 선택함.
        $("p").parentsUntil("div")
            .css({"border": "10px solid blue"});    // 해당 요소의 CSS 스타일을 변경함.
    });
});