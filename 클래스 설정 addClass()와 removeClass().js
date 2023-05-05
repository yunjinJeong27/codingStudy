$(function() {
    $("#addBtn").on("click", function() {
        // id가 "one"와 "three"인 요소에 "example"라는 클래스를 추가함.
        $("#one, #three").addClass("example");
    });
    
    $("#removeBtn").on("click", function() {
        // id가 "one"와 "three"인 요소가 "example"라는 클래스에 포함되면 해당 클래스를 제거함.
        $("#one, #three").removeClass("example");
    });
});

