$(function() {
    $("button").on("click", function() {
        $("p").css({
            fontSize: "50px",         // 모든 <p>요소의 글씨 크기를 50px로 설정함.
            backgroundColor: "blue" // 모든 <p>요소의 배경색을 blue로 설정함.
        });
    });
});