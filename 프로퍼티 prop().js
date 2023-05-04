$(function() {
    $("#setBtn").on("click", function() {
        $("input[value='example']").prop({ // <input>요소 중에서 value 값이 "example"인 요소를 선택한 후
            checked: true                 // 해당 요소에 checked 프로퍼티를 true 값으로 설정함.
        });
    });
    $("#removeBtn").on("click", function() {
        $("input[value='example']").removeProp("checked"); // 해당 요소에서 checked 프로퍼티를 삭제함.
    });
});