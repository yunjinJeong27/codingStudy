$(function() {
    $("button").on("click", function() {
        // id가 "item"인 요소가 "example"라는 클래스에 포함되면 true를, 포함되지 않으면 false를 반환함.
        var result = $("#item").hasClass("example");
        $("#text").html(result);
    });
});

