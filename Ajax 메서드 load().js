$(function() {
    $("#requestBtn").on("click", function() {
        // URL 주소에 존재하는 HTML 코드에서 <li>요소를 읽은 후에 id가 "example"인 요소에 배치함.
        $("#example").load("/examples/jq01.html li");
    });
});