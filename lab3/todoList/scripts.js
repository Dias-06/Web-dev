const form = document.querySelector(".todo__form");
const input = document.querySelector("#new-task");
const list = document.querySelector(".todo__list");
const totalSpan = document.querySelector(".todo__total-tasks span");
const deleteAllBtn = document.querySelector(".todo__delete-all-button");
const emptyMessage = document.querySelector(".todo__empty-message");

function createNewTask(title){
    let task = document.createElement("li");
    task.className = "todo-item"
    task.innerHTML = `<input type="checkbox" class="todo-item__checkbox">
    <span class="todo-item__title">${title}</span>
    <span class="todo-item__del" role="button" tabindex="0" aria-label="Delete task">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L1 11M1 1L11 11" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`
    return task;
}
function updateChecked(){
  const items = list.querySelectorAll(".todo-item > input:checked");

  totalSpan.textContent = items.length;
}
deleteAllBtn.addEventListener('click',function(){
  const items = list.querySelectorAll(".todo-item");
  items.forEach(item => item.remove())
  updateChecked()
})

form.addEventListener("submit",function(e){
  const items = list.querySelectorAll(".todo-item");
  if(items.length <3){
    if(input.value == ""){
      e.preventDefault()
      return alert("empty")
  }
    e.preventDefault()
    const title = input.value.trim()
    const task = createNewTask(title)
    list.prepend(task)
    input.value = "";
    updateChecked()
  }
  else{
    e.preventDefault()
    alert("only 3 tasks")
  }
})
list.addEventListener('click',(e) => {
  if(e.target.closest(".todo-item__del")){
    e.target.closest(".todo-item").remove()
    updateChecked()
  }
})
list.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-item__checkbox")) {
    updateChecked();
  }
});
