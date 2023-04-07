// each() 메소드는 선택한 요소 집합의 요소마다 전달받은 콜백 함수를 실행
$(function() {
    $("button").on("click", function() {
        $("li").each(function() {            // 선택한 <li>요소 집합의 각 <li>요소를 선택함.
            $(this).toggleClass("boldFont"); // 각 <li>요소마다 클래스를 추가하거나 제거함.
        });
    });
});