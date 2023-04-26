// .offset() 메서드  : HTML 문서(HTML document)를 기준으로 함.
// .position() 메서드: 선택한 요소가 웹 페이지에 위치할 때 기준이 되었던 부모 요소(offset parent)를 기준으로 하는 상대 위치를 반환
$(function() {
    $("button").on("click", function() {
        var str = "";
        var offsetPosition = $("#example").offset(); // offset() 메소드를 사용해 id가 "example"인 요소의 위치 정보
        str += "offset() 메소드를 사용해 구한 p 요소의 위치는<br>";
        str += "left가 " + offsetPosition.left + "픽셀이고, ";    // id가 "example"인 요소의 left 위치를 반환함.
        str += "top은 " + offsetPosition.top + "픽셀입니다.<br>"; // id가 "example"인 요소의 top 위치를 반환함.

        var posPosition = $("#example").position();  // position() 메소드를 사용해 id가 "example"인 요소의 위치 정보
        str += "position() 메소드를 사용해 구한 p 요소의 위치는<br>";
        str += "left가 " + posPosition.left + "픽셀이고, ";       // id가 "example"인 요소의 left 위치를 반환함.
        str += "top은 " + posPosition.top + "픽셀입니다.";        // id가 "example"인 요소의 top 위치를 반환함.
        $("#text").html(str);
    });
});


// .offsetParent() 메서드 : 기준이 되는 조상 요소
// .position() 메소드에서 기준으로 사용되는 부모 요소는 .offsetParent() 메소드를 사용하여 확인
$(function() {
    $("button").on("click", function() {
        $("#example").offsetParent()  // id가 "example"인 요소가 위치할 때 기준이 된 조상 요소를 선택함.
            .css("border", "1px solid blue"); // 해당 요소의 CSS 스타일을 변경함.
    });
});