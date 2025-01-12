document.getElementById('addTaskButton').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== "")
    {
        addTask(task);
        taskInput.value = "";
    }
});
function addTask(task)
{
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';

    // Capture the li element in a closure
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}