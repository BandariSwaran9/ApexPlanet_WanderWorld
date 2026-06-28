const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    filteredTasks.forEach((task, index) => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>

            <div>

                <button class="completeBtn">✓</button>

                <button class="editBtn">✏</button>

                <button class="deleteBtn">🗑</button>

            </div>
        `;

        // Complete
        li.querySelector(".completeBtn").addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        // Edit
        li.querySelector(".editBtn").addEventListener("click", () => {

            const updated = prompt("Edit Task", task.text);

            if (updated && updated.trim() !== "") {
                task.text = updated.trim();
                saveTasks();
                renderTasks();
            }

        });

        // Delete
        li.querySelector(".deleteBtn").addEventListener("click", () => {

            tasks.splice(index, 1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(li);

    });

}

function addTask() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();

    renderTasks();

    taskInput.value = "";

}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        addTask();
    }

});

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        renderTasks();

    });

});

renderTasks();
const createTaskBtn = document.getElementById("createTaskBtn");

createTaskBtn?.addEventListener("click", (e) => {

    e.preventDefault();

    taskInput.focus();

    window.scrollTo({
        top: taskInput.offsetTop - 150,
        behavior: "smooth"
    });

});