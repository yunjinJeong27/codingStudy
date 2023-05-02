$(function() {
    $("button").on("click", function() {
        $("p").css("fontSize", "50px");          // 모든 <p>요소의 글씨 크기를 25px로 설정함.
        $("#text").html($("p").css("fontSize")); // 첫 번째 <p>요소의 글씨 크기를 반환함.
    });
});