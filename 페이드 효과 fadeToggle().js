$(function() {
    $("#fadeToggleBtn").on("click", function() {
        // id가 "example"인 요소를 5초에 걸쳐 점점 나타나게 하거나 사라지게 함.
        $("#example").fadeToggle(5000);
    });
});