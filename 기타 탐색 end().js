// end() 마지막으로 실행한 메소드의 실행 전 상태로 선택한 요소의 집합을 복원
$(function() {
    $("button").on("click", function() {
        $("#item")     // id가 "item"인 요소의
            .find("p")   // 자손 요소 중에서 <p>요소를 모두 선택하고,
            .end()       // 선택된 요소의 집합을 find() 메소드의 실행 전으로 복원함.
            .css("border", "2px solid green"); // 따라서 id가 "item"인 요소의 CSS 스타일을 설정함.
    });
});