$(function() {
    $("button").on("click", function() {
        var newText = $("p").html(); // <p> 요소의 텍스트를 읽어오는 getter 메소드
        $("#old").html(newText);     // id가 "text"인 요소에 새로운 텍스트를 설정하는 setter 메소드
    });
})