$(function() {
    $("#toggleBtn").on("click", function() {
        // id가 "example"인 요소를 3초에 걸쳐 올라가면서 사라지거나 내려오면서 나타나게 함.
        $("#example").slideToggle(3000);
    });
    $("#stopBtn").on("click", function() {
        // id가 "example"인 요소에서 실행 중인 모든 이펙트 효과를 즉시 중지시킴.
        $("#example").stop();
    });
    $("#finishBtn").on("click", function() {
        // id가 "example"인 요소에서 실행 중인 모든 이펙트 효과를 즉시 중지시키고, 그 큐까지 모두 제거함.
        $("#divexampleBox").finish();
    });
});