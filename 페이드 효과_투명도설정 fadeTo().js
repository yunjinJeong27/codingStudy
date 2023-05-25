$(function() {
    $("#fadeBtn").on("click", function() {
        // id가 "example_01"인 요소를 3초에 걸쳐 opacity 속성값을 0.3까지만 변경시킴.
        $("#example_01").fadeTo(3000, 0.3);
        // id가 "example_02"인 요소를 2초에 걸쳐 opacity 속성값을 0.5까지만 변경시킴.
        $("#example_02").fadeTo(2000, 0.5);
        // id가 "example_03"인 요소를 3초에 걸쳐 opacity 속성값을 0.8까지만 변경시킴.
        $("#example_03").fadeTo(3000, 0.8);
    });
});