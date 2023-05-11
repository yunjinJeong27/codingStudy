$(function() {
    $("button").on({  // 모든 <button>요소에
        mouseenter: function() { 
            $("#text").append("마우스가 버튼 위로 진입했어요!<br>");
        },
        click: function() {      
            $("#text").append("마우스가 버튼을 클릭했어요!<br>");
        },
        mouseleave: function() { 
            $("#text").append("마우스가 버튼 위에서 빠져나갔어요!<br>");
        }
    });
});