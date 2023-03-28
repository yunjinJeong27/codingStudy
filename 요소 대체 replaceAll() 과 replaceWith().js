$(function() {
    $("button").on("click", function() {
        // class가 "item"인 각 요소를 id가 "firstItme"인 요소로 대체함.
        $("#firstItem").replaceAll(".item");
    });
});

$(function() {
    $("button").on("click", function() {
        // class가 "item"인 모든 요소를 id가 "firstItme"인 요소로 대체함.
        $(".item").replaceWith($("#firstItem"));
    });
});