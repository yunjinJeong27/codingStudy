$(function() {
    $("#toggleBtn").on("click", function() {
        // id가 "example"인 요소를 빠르게(0.2초에 걸쳐) 올라가면서 사라지거나 내려오면서 나타나게 함.
        $("#example").slideToggle("fast");
    });
    $("#setBtn").on("click", function() {
        // jQuery.fx 객체의 speeds 프로퍼티의 fast의 기본값을 1초로 변경함.
        jQuery.fx.speeds.fast = 1000;
    });
});