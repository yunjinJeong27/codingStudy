$(function() {
    $("body").on({          // <body>요소에
        click: function() { // click 이벤트가 발생했을 때
            $("#text").html("버튼을 클릭했습니다!");
        }
    }, "#btn");             // id가 "btn"인 요소에 이벤트 핸들러를 등록함.
});