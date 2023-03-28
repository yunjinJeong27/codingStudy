$(function() {
    $("button").on("click", function() {
        // class가 "item"인 요소 중에서 class가 각각 "abcd", "efgh"인 요소를 모두 삭제함.
        // 삭제된 요소와 연관된 제이쿼리 데이터나 이벤트도 같이 삭제됨
        $(".item").remove(".abcd, .efgh");
    });
});

$(function() {
    var data;
    $("#detachBtn").on("click", function() {
        data = $(".item").detach(); // class가 "item"인 요소를 모두 삭제함.
        // 삭제된 요소와 연관된 제이쿼리 데이터나 이벤트는 유지됨
    });
    $("#restoreBtn").on("click", function() {
        $("#itemBox").append(data);  // detach() 메소드로 삭제되었던 모든 요소를 다시 추가함.
    });
});