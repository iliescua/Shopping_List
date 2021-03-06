const input = document.getElementById("userInput");
const btn_add = document.getElementById("add_btn");
const btn_clear = document.getElementById("clear_btn");
const btn_remove = document.getElementById("removeLast_btn");
const itemContainer = document.getElementById("itemContainer");

// Basic function to check and add an item to the item container
const addListItem = () => {
    const itemContents = document.createElement("div");
    const paragraph = document.createElement("p");
    const btn_del = document.createElement("button");
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
const addBtnAction = () => {
    if(input.value.length > 0) {
        addListItem();
    }
}

// Action for enter is clicked instead of the add button
const addEnterAction = (event) => {
    if (input.value.length > 0 && event.key === "Enter"){
        addListItem();
    }
}

// Action to strikethrough any selected item
const updateText = (item) => {
    if (item.target.tagName === "P") {
        item.target.classList.toggle("complete");
    }
}

// Action to delete row once user decides it is no londer necessary
const delRow = (delClick) => {
    if (delClick.target.id === "delete_btn") {
        delClick.target.parentElement.remove();
    }
}

// Action to clear all entries in the list
const clearAll = () => {
    while (itemContainer.getElementsByClassName("itemContents").length > 0){
        itemContainer.removeChild(itemContainer.firstChild);
    }
}

// Added and set up all of the eventlisteners for any action we want the user to do
btn_add.addEventListener("click", addBtnAction);
input.addEventListener("keypress", addEnterAction);
itemContainer.addEventListener("click", updateText);
itemContainer.addEventListener("click", delRow);
btn_clear.addEventListener("click", clearAll);