// appendTo() 선택한 요소를 '해당 요소의 마지막'에 삽입한다
$(function() {
    $("#Btn").on("click", function() {
        // id가 "list"인 요소의 맨 마지막에 id가 "Item"인 요소를 추가
        $("#Item").appendTo("#list");

    });

});

//prependTo() 선택한 요소를 '해당 요소의 처음'에 삽입한다
$(function() {
    $("button").on("click", function() {
        $("<b>추가된 콘텐츠</b>").prependTo(".item");
    });
});