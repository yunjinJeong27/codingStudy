$(function() {
    $("button").on("click", function() {
        // id가 "example"인 요소의 수평 스크롤 바의 현재 위치를 반환함.
        var str = "수평 스크롤 바의 현재 위치는 left 방향으로 " + $("#example").scrollLeft() + "픽셀이고,<br>";
        // id가 "example"인 요소의 수직 스크롤 바의 현재 위치를 반환함.
        str += "수직 스크롤 바의 현재 위치는 top 방향으로 " + $("#example").scrollTop() + "픽셀입니다.";
        $("#text").html(str);
    });
});