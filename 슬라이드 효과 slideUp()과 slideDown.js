$(function() {
    $("#slideUpBtn").on("click", function() {
        $("#example").slideUp();   // id가 "example"인 요소를 올라가면서 사라지게 함.
    });
    $("#slideDownBtn").on("click", function() {
        $("#example").slideDown(); // id가 "example"인 요소를 내려오면서 나타나게 함.
    });
});