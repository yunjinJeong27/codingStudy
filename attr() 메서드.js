$(function() {
    $("button").on("click", function() {
        var imgSrc = $("img").attr("src"); // src 속성값을 읽어오는 getter 메소드
        $("img").attr("src", "/img_one.png"); // src 속성값을 새로운 값으로 설정하는 setter 메소드
    });
});