$(function() {
    $("#toggleBtn").on("click", function() {
        // id가 "divBox"인 요소를 1초에 걸쳐 올라가면서 사라지거나 내려오면서 나타나게 함.
        $("#divBox").slideToggle(1000);
    });
    $("#forbidBtn").on("click", function() {
        // jQuery.fx 객체의 off 프로퍼티를 true로 설정함.
        jQuery.fx.off = true;
    });
});