document.getElementById("add-task-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const task = document.getElementById("input-value").value;
  // console.log(task);
  document.getElementById("input-value").value = "";
  let taskListParent = document.getElementById("task-list-parent");
  let li = document.createElement("li");
  li.id = "task-list-added";
  li.innerHTML = `
                <p class="task">${task}</p>
                   <br />
                   <button class="bg-green-400 text-white py-2 px-3 rounded-md m-2 done-btn" >
                     Done
                   </button>
                   <button class="bg-red-500 text-white py-2 px-3 rounded-md m-2 delete-btn">
                     Delete
                   </button>
  
  `;
  li.classList.add(
    "my-4",
    "bg-gray-200",
    "shadow-md",
    "shadow-black",
    "p-3",
    "rounded-md"
  );
  taskListParent.appendChild(li);
});

//Add task to completed list
document.getElementById("task-list-parent").addEventListener("click", (e) => {
  if (e.target.classList.contains("done-btn")) {
    const li = e.target.parentElement;
    let taskParagraph = li.querySelector("p.task");
    taskParagraph.style.textDecoration = "line-through";
    console.log();
    const completedUl = document.getElementById("completed-task-div");
    const completedLi = document.createElement("li");
    completedLi.innerHTML = `
                      <p>${taskParagraph.innerText}</p>
                      <br />
                   
                   <button class="bg-red-500 text-white py-2 px-3 rounded-md m-2 delete-btn">
                     Delete
                   </button>
  `;
    completedLi.classList.add(
      "my-4",
      "bg-gray-200",
      "shadow-md",
      "shadow-black",
      "p-3",
      "rounded-md"
    );

    completedUl.appendChild(completedLi);
  }
});

document.getElementById("task-list-parent").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const parent = e.target.parentElement;
    parent.remove();
    console.log(parent);
  }
});
document.getElementById("completed-task-div").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const parent = e.target.parentElement;
    parent.remove();
  }
});
