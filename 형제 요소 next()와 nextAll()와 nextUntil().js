$(function() {
    $("button").on("click", function() {
        $("h1").next()                     // <h1>요소의 바로 다음 형제 요소를 선택함.
            .css({"border": "10px solid blue"}); // 해당 요소의 CSS 스타일을 변경함.
    }); 
});

$(function() {
    $("button").on("click", function() {
        $("h1").nextAll()                  // <h1>요소의 다음에 있는 형제 요소를 모두 선택함.
        .css({"border": "10px solid green"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});

$(function() {
    $("button").on("click", function() {
        // <h1>요소의 형제 요소 중에서 첫 번째 <p>요소의 바로 이전까지의 모든 요소를 선택함.
        $("h1").nextUntil("p")
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});