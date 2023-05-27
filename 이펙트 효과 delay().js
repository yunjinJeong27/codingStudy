$(function() {
    $("#startBtn").on("click", function() {
        // id가 "example"인 요소를 0.5초에 걸쳐 사라지게 하고
        // 3초의 지연시간 뒤에 다시 4초에 걸쳐 나타나게 함.
        $("#example").fadeOut(500).delay(3000).fadeIn(4000);
    });
});