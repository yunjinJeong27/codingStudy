$(function() {
    $("button").on("click", function() {
        // id가 "one"와 "three"인 요소에 "example"이라는 클래스를 추가하고, 다시 한 번 클릭하면 제거함.
        $("#one, #three").toggleClass("example");
    });
});