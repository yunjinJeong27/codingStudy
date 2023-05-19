$(function() {
    $("#fadeInBtn").on("click", function() {
        $("#example").fadeIn("slow"); // id가 "example"인 요소를 느리게 점점 나타나게 함.
    });
    $("#fadeOutBtn").on("click", function() {
        $("#example").fadeOut(3000);  // id가 "example"인 요소를 3초에 걸쳐 점점 사라지게 함.
    });
});