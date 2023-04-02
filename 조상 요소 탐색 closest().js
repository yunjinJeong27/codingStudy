$(function() {
    $("#parents").on("click", function() {
        // 아이디가 "item"인 요소의 조상 요소 중에서 <div>요소를 모두 선택함.
        $("#item").parents("div")
            .css({"border": "10px solid green"});
    });

    $("#closest").on("click", function() {
        // 아이디가 "item"인 요소 자신과 조상 요소 중에서 첫 번째 <div>요소를 선택함.
        $("#item").closest("div")
            .css({"border": "10px solid green"});
    });
});