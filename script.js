const input = document.getElementById("input");
const addbtn = document.getElementById("add");
const list = document.getElementById("shoppingList");

addbtn.addEventListener("click", function () {

    const value = input.value.trim();

    if (value === "") {
        alert("Please Enter An Item");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = input.value;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
      list.appendChild(li);

    input.value = "";
deleteBtn.addEventListener("click", function()
{
const removeditem = li.remove();
return removeditem;
})

editBtn.addEventListener("click", function () {

  const inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.value = span.textContent; 
  li.replaceChild(inputBox, span);

  });

});



