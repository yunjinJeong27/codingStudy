// .filter() 메서드는 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출의 결과가 참(true)인 요소를 모두 선택한다.
$(function() {
    $("button").on("click", function() {
        $("li").filter(":odd")                   // 선택한 <li>요소 중에서 인덱스가 홀수인 요소만을 선택함.
            .css({"border": "2px solid skyblue"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});