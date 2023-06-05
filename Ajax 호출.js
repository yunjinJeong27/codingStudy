$(function() {
    $("#requestBtn").on("click", function() {
        $("#text").load("/examples/jquery_example.txt");
    });
});