const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const remove = document.getElementById("remove");
const error = document.getElementById("message");

function appendTask(task) {
  const li = document.createElement("li");
  li.innerHTML = task;

  const button = document.createElement("button");
  button.innerText = "❌";

  li.appendChild(button);
  list.appendChild(li);

  button.addEventListener("click", () => {
    input.value = task;
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");

    // setTimeout(() => li.remove(), 3000);
  });
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    error.classList.add("error");
    error.innerText = `Input can't be empty`;
    setTimeout(() => (error.innerText = ""), 3000);
    setTimeout(() => error.classList.remove("error"), 3000);
  } else {
    appendTask(input.value);
    input.value = "";
  }
});
