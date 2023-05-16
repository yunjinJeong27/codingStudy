$(function() {
    $("#showBtn").on("click", function() {
        $("#example").show(3000);   // id가 "example"인 요소를 3초에 걸쳐 나타나게 함.
    });
    $("#hideBtn").on("click", function() {
        $("#example").hide("fast"); // id가 "example"인 요소를 빠르게 숨김.
    });
});