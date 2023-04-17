// contents() 선택한 요소의 자식(child) 요소를 텍스트 노드와 주석 노드까지 모두 포함하여 선택
$(function() {
    $("button").on("click", function() {
        $("item")     // <item>요소의
            .contents() // 자식 요소를 모두 선택한 후,
            .find("a")  // 그 중에서 <a>요소를 모두 선택하고,
            .css("backgroundColor", "green"); // 선택된 모든 <a>요소의 CSS 스타일을 설정함.
    });
});