var input = document.getElementById("userInput");
var btn_add = document.getElementById("add_btn");
var btn_clear = document.getElementById("clear_btn");
var btn_remove = document.getElementById("removeLast_btn");
var itemContainer = document.getElementById("itemContainer");

// Basic function to check and add an item to the ul
function addListItem() {
    var paragraph = document.createElement("p");
    var btn_del = document.createElement("button");
    paragraph.appendChild(document.createTextNode(input.value));
    btn_del.appendChild(document.createTextNode("X"));
    btn_del.id = "delete_btn";
    itemContainer.append(paragraph, btn_del);
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

btn_del.addEventListener("click", function(){
    
});

// Action to clear all entries in the list
btn_clear.addEventListener("click", function() {
    var element =  itemContainer.getElementsByTagName("p");
    while(itemContainer.getElementsByTagName("p").length > 0) {
        listStorage.removeChild(element[0]);
    }
});