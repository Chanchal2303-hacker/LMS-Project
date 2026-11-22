
let box = document.querySelector(".box");

let input = document.createElement("input");
input.placeholder = "Enter Assignment Name";
input.style.padding = "10px";
input.style.marginBottom = "15px";

let addBtn = document.createElement("button");
addBtn.innerText = "Add Assignment";
addBtn.style.padding = "10px";
addBtn.style.marginLeft = "10px";

box.prepend(addBtn);
box.prepend(input);

addBtn.addEventListener("click", function() {

    let name = input.value;

    if(name == "") {
        alert("Please enter assignment name");
        return;
    }

    let div = document.createElement("div");
    div.className = "assignment";

    let heading = document.createElement("h3");
    heading.innerText = name;

    let status = document.createElement("span");
    status.innerText = "Pending";
    status.className = "pending";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function() {
        div.remove();
    });

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    completeBtn.addEventListener("click", function() {
        status.innerText = "Completed";
        status.className = "completed";
    });

    div.appendChild(heading);
    div.appendChild(status);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    box.appendChild(div);

    input.value = "";

});

let assignments = document.querySelectorAll(".assignment");

assignments.forEach(function(item) {

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    let status = item.querySelector("span");

    completeBtn.addEventListener("click", function() {
        status.innerText = "Completed";
        status.className = "completed";
    });

    deleteBtn.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(completeBtn);
    item.appendChild(deleteBtn);

});
