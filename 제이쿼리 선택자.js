$(function() {
    var liElements = $("li"); // <li>요소를 모두 선택하여 변수 liElements 저장.
    $("button").on("click", function() {
        $("#list").text("저장된 <li>요소의 총 개수: " + liElements.length);
    });
});

$(function() {
    $("button").on("click", function() {
        $(":checked").next().text("체크되어 있는 요소를 모두 선택함.");
    });
});