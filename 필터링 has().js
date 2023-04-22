// .has() 메소드는 선택한 요소 중에서 전달받은 선택자에 해당하는 요소를 자손 요소로 가지고 있는 요소를 모두 선택한다.
$(function() {
    $("button").on("click", function() {
        $("li").has("span")  // 선택한 <li>요소 중에서 자손 요소로 <span>요소를 가지고 있는 요소만을 선택함.
            .css({"border": "2px solid pink"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});