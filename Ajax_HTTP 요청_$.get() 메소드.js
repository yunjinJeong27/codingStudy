$(function() {
    $("#requestBtn").on("click", function() {
        // GET 방식으로 서버에 HTTP Request를 보냄.
        $.get("/examples/ajax.php",
            { species: "강아지", name: "도그", age: 2, }, // 서버가 필요한 정보를 같이 보냄.
            function(data, status) {
                $("#text").html(data + "<br>" + status); // 전송받은 데이터와 전송 성공 여부를 보여줌.
            }
        );
    });
});