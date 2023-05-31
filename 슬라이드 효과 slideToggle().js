$(function() {
    $("#slideToggleBtn").on("click", function() {
        // id가 "example"인 요소를 빠르게 올라가면서 사라지거나 내려오면서 나타나게 함.
        $("#example").slideToggle("fast");
    });
});