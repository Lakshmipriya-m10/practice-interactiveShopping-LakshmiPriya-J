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
    //li.textContent = value;
    //list.appendChild(li);

    const span = document.createElement("span");
    span.textContent = input.value;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
//document.getElementById("list").appendChild(li);
//document.getElementById("itemInput").value = "";
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
  // replace span with input box
  li.replaceChild(inputBox, span);

  });

});


//deleteBtn.textContent = "Delete";
//deleteBtn.onclick = function () {
 // li.remove();
//};

