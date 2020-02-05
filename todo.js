
var list = document.querySelector(".container");

function add(){
    
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.addEventListener("change", check);
    
    var del = document.createElement("button");
    del.addEventListener("click", remove);
    del.classList.add("delete");
    var x = document.createTextNode("x");
    del.appendChild(x);

    var label = document.createElement("label");
    label.textContent = prompt("What would you like to do?");
    label.appendChild(input);
    label.appendChild(del);
    list.appendChild(label);
}
function check(){
    event.target.parentElement.classList.toggle("checked");
}
function remove(){
    var removeEl = event.target.parentElement;
    list.removeChild(removeEl);
}