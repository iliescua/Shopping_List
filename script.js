var input = document.getElementById("userInput");
var btn_add = document.getElementById("add_btn");
var btn_clear = document.getElementById("clear_btn");
var btn_remove = document.getElementById("removeLast_btn");
var itemContainer = document.getElementById("itemContainer");

// Basic function to check and add an item to the item container
function addListItem() {
    var itemContents = document.createElement("div");
    var paragraph = document.createElement("p");
    var btn_del = document.createElement("button");
    // Add item contents div to the item container
    itemContents.classList.add("itemContents");
    itemContainer.appendChild(itemContents);
    // Set item and button text
    paragraph.appendChild(document.createTextNode(input.value));
    btn_del.appendChild(document.createTextNode("X"));
    btn_del.id = "delete_btn";
    // Add item and button to the item contents div
    itemContents.append(paragraph, btn_del);
    // Clear user textfield
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

// Action to strikethrough any selected item
itemContainer.addEventListener("click", function(item){
    if (item.target.tagName === "P") {
        item.target.classList.toggle("complete");
    }
});

// Action to delete row once user decides it is no londer necessary
itemContainer.addEventListener("click", function(delClick){
    if(delClick.target.id === "delete_btn")
    delClick.target.parentElement.remove();
});

// Action to clear all entries in the list
btn_clear.addEventListener("click", function() {
    while(itemContainer.getElementsByClassName("itemContents").length > 0){
        itemContainer.removeChild(itemContainer.firstChild);
    }
});