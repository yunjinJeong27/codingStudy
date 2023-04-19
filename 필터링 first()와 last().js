//.first() 메서드는 선택한 요소 중에서 첫 번째 요소를 선택하고, .last() 메소드는 마지막 요소를 선택한다.
$(function() {
    $("#firstBtn").on("click", function() {
        $("li").first()                           // 선택한 <li>요소 중에서 첫 번째 요소만을 선택함.
            .css({"border": "2px solid red"});  // 해당 요소의 CSS 스타일을 변경함.
    });

    $("#lastBtn").on("click", function() {
        $("li").last()                            // 선택한 <li>요소 중에서 마지막 요소만을 선택함.
            .css({"border": "2px solid blue"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});