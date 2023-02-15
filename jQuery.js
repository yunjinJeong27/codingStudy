function func() {
    createElement(); // HTML 요소를 생성
    addAttribute();  // HTML 요소에 속성을 추가
}

function createElement() {
    var node = document.getElementById("text");
    var newNode = document.createElement("p") newNode.innerHTML = "HTML 요소를 생성.";
    newNode.setAttribute("id", "J");
    document.body.insertBefore(newNode, node);
}

function addAttribute() {
    document.getElementById("J").setAttribute("style", "color: blue");
}