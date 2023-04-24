$(function() {
    $("button").on("click", function() {
        var str = "이 요소의 ";
        str += "너비는 " + $("#boxEx").width() + "픽셀이고,<br>"; // id가 "boxEx"인 요소의 너비를 반환함.
        str += "높이는 " + $("#boxEx").height() + "픽셀입니다."   // id가 "boxEx"인 요소의 높이를 반환함.
        $("#text").html(str);
    });
});

$(function() {
    $("button").on("click", function() {
        $("#boxEx").width("400");  // id가 "boxEx"인 요소의 너비를 설정함.
        $("#boxEx").height("200"); // id가 "boxEx"인 요소의 높이를 설정함.
    });
});