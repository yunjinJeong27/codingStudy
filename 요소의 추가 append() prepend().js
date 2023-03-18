//append() 
$(function() {
    $("button").on("click", function() {
        $("#list").append("<li>선택한 요소의 마지막에 새로운 요소나 콘텐츠를 추가</li>");
    });

});

//prepend() 
$(function() {
    $("button").on("click", function() {
        $("li").prepend("선택한 요소의 처음에 새로운 요소나 콘텐츠를 추가");
    });
});