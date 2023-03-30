$(function() {
    $("button").on("click", function() {
        $("#itemBox").empty(); // id가 "itemBox"인 요소의 자식 요소를 모두 삭제함.
    });
});

$(function() {
    $("button").on("click", function() {
        $("span").unwrap(); // 모든 <span>요소의 부모 요소를 삭제함.
    });
});