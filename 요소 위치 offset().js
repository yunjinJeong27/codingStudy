// .offset() 메소드는 선택한 요소 집합의 첫 번째 요소의 위치를 HTML 문서를 기준으로 반환
$(function() {
    $("button").on("click", function() {
        var paraPosition = $("#item").offset(); // id가 "item"인 요소의 위치 정보를 저장함.
        var str = "p 요소의 위치는 ";
        str += "id가 "item"인 요소의 left 위치: " + paraPosition.left + "픽셀이고,<br>"; 
        str += "id가 "item"인 요소의 top 위치: " + paraPosition.top + "픽셀입니다.";
        $("#text").html(str);
    });
});

$(function() {
    $("button").on("click", function() {
        $("#item").offset({ top: 200, left: 100 }); // id가 "item"인 요소의 위치를 설정함.
        var paraPosition = $("#item").offset();     // id가 "item"인 요소의 위치 정보를 저장함.
        var str = "p 요소의 위치는 ";
        str += "id가 "item"인 요소의 left 위치: " + paraPosition.left + "픽셀이고,<br>"; 
        str += "id가 "item"인 요소의 top 위치: " + paraPosition.top + "픽셀입니다.";
        $("#text").html(str);
    });
});