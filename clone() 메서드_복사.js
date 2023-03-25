$(function() {
    $("button").on("click", function() {
        // id가 "item"인 요소를 복사하여 id가 "list"인 요소에 추가함.
        $("#item").clone().appendTo("#list");
    });
});