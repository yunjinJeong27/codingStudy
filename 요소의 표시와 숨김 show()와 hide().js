$(function() {
    $("#showBtn").on("click", function() {
        $("#example").show(); // id가 "example"인 요소를 나타나게 함.
    });
    $("#hideBtn").on("click", function() {
        $("#example").hide(); // id가 "example"인 요소를 숨김.
    });
});