const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskList = document.getElementById('taskList');

let tasks = [];

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        date: taskDate.value,
        text: taskInput.value,
    };
    tasks.push(task);
    taskInput.value = '';
    taskDate.value = '';
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.date} - ${task.text}</span>
            <div>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    taskInput.value = task.text;
    taskDate.value = task.date;
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}