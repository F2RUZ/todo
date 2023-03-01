let elForm = document.querySelector("#form");
let input = document.querySelector("#input");
let ul = document.querySelector("#list");
let span = document.querySelector("#span");
let delBtn = document.querySelector("#delete");
let editBtn = document.querySelector("#edit");
let complateBtn = document.querySelector("#complate");


elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = e.target.todo.value;
  let newLi = document.createElement("li");

  if (inputValue.trim() === "") {
    span.style.display = "block";
    input.className += " border-danger";

    return;
  } else {
    span.style.display = "none";
    input.className = " form-control";
  }

  newLi.className =
    "  w-100 list-group-item d-flex justify-content-between align-items-center";

  newLi.innerHTML = `
  <p>${inputValue}</p>

  <div>
    <button class="btn btn-success m-1">Edit</button>
    <button class="btn btn-info text-white">Complated</button>
    <button class="btn btn-danger m-1">Delete</button>

  </div>
    `;

  ul.append(newLi);

  elForm.reset();
});
