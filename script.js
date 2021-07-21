var input = document.getElementById("userInput");
var btn_add = document.getElementById("add_btn");
var btn_clear = document.getElementById("clear_btn");
var btn_remove = document.getElementById("removeLast_btn");
var ul = document.querySelector("ul");

// Basic function to check and add an item to the ul
function addListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// Action for when the add button is clicked
btn_add.addEventListener("click", function() {
    if(input.value.length > 0) {
        addListItem();
    }
});

// Action for enter is clicked instead of the add button
input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.key === "Enter"){
        addListItem();
    }
});

// Action to clear all entries in the list
btn_clear.addEventListener("click", function() {
    var element =  ul.getElementsByTagName("li");
    while(ul.getElementsByTagName("li").length > 0) {
        ul.removeChild(element[0]);
    }
});

// Action to remove the last item in the list
btn_remove.addEventListener("click", function() {
    var element =  ul.getElementsByTagName("li");
    ul.removeChild(element[ul.getElementsByTagName("li").length - 1]);
});
