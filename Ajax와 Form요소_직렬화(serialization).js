$(function() {
    $("form").on("submit", function(event) {  // <form>요소에 "submit" 이벤트가 발생할 때,
        event.preventDefault();               // 서버로 전송하지 않음.
        $("#text").html($(this).serialize()); // 입력받은 데이터를 직렬화하여 나타냄.
    });
});