$(function() {
    $("button").click(function() {    // 모든 <button>요소에 click 이벤트를 설정함.
        $("#clickText").css("color", "blue");
        $("#dblclickText").css("color", "red");
    });
    $("button").dblclick(function() { // 모든 <button>요소에 dblclick 이벤트를 설정함.
        $("#dblclickText").css("color", "blue");
        $("#clickText").css("color", "red");
    });
});