$(function() {
    $("button").on("click", function() {
        $("#text")
            .append($.type(true) + "<br>")                 // boolean
            .append($.type(new Boolean()) + "<br>")        // boolean
            .append($.type(100) + "<br>")                  // number
            .append($.type(new Number(20)) + "<br>")       // number
            .append($.type("문자열") + "<br>")             // string
            .append($.type(new String("홍길동")) + "<br>") // string
            .append($.type(function() {}) + "<br>")        // function
            .append($.type(new Function()) + "<br>")       // function
            .append($.type([]) + "<br>")                   // array
            .append($.type(/정규표현식/) + "<br>")         // regexp
            .append($.type(null) + "<br>");                // null
    });
});