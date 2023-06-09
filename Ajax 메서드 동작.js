$(function() {
    $("#requestBtn").on("click", function() {
        $.ajax("/examples/request_ajax.php")
        .done(function() {
            alert("요청 성공");
        })
        .fail(function() {
            alert("요청 실패");
        })
        .always(function() {
            alert("요청 완료");
        });
    });
});