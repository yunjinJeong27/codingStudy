$(function() {
    $("#getter").on("click", function() {
        var size = "width: " + $("#one").width() + ", height: " + $("#one").height() + "<br>";
        $("#text").html(size);
    });

    $("#setter").on("click", function() {
        width = $("#one").width();
        height = $("#one").height();

        $("#one").width(width/2).height(height/2);
        var size = "width: " + $("#one").width() + ", height: " + $("#one").height() + " 변경되었습니다.<br>";
        $("#text").html(size);
    });
});