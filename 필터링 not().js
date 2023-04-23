// .not() 메서드는 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출의 결과가 참(true)인 요소를 제외한 나머지 요소를 모두 선택
$(function() {
    $("button").on("click", function() {  
        $("li").not(":lt(2)") // 선택한 <li>요소 중에서 인덱스가 2보다 작지 않은 요소만을 선택함.
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경함.
    });
});