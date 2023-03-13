$(function() {
    $("button").on("click", function() {
        $("#item")      // id가 "item"인 요소의 자손 요소 중에서
            .find("li") // <li>요소를 모두 선택한 후에,
            .eq(1).html("두 번째 요소 값 설정")  
            .end()      // 다시 id가 "item"인 요소의 자손 요소 중에서 <li>요소를 모두 선택한 후에,
            .eq(2).html("세 번째 요소의 값 설정");
    });
});