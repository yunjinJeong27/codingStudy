// .eq() 메서드는 선택한 요소 중에서 전달받은 인덱스에 해당하는 요소를 선택
// 이때 선택한 요소 집합의 맨 처음 요소를 인덱스 0으로 놓고, 앞에서부터 검색한다.
$(function() {
    $("#clockwiseBtn").on("click", function() {
        $("li").eq(1)                             // 선택한 <li>요소 중에서 두 번째 요소만을 선택함.
            .css({"border": "2px solid red"});  // 해당 요소의 CSS 스타일을 변경함.
    });

    $("#counterBtn").on("click", function() {
        $("li").eq(-1)                            // 선택한 <li>요소 중에서 뒤에서부터 첫 번째 요소만을 선택함.
            .css({"border": "2px solid blue"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});