const taskList = new Set();

function addTask() {
    const taskInput = document.getElementById('inpTask').value.toUpperCase();
    if (taskInput.trim() === '') {
        document.getElementById('notify').innerText = 'Field cannot be empty';
    }
    else {
        if (taskList.has(taskInput)) {
            const msg = `Task : ${taskInput} already exists`;
            document.getElementById('notify').innerText = msg;
        }
        else {
            taskList.add(taskInput);
            const msg = `Task added`;
            document.getElementById('notify').innerText = msg;
        }
    }
    document.getElementById('inpTask').value = ''
}

function displayAll() {
    if (taskList.size == 0) document.getElementById('notify').innerText = `Task List Empty`;
    else {
        let text = '';
        let i = 1;
        taskList.forEach(function (value) {
            text += `${i}.Task - ${value}\n`;
            i++;
        })
        document.getElementById('notify').innerText = `${text}`;
    }
}

function searchTask() {
    const srchTask = document.getElementById('inpTask').value.toUpperCase();
    if (srchTask.trim() === '')
        document.getElementById('notify').innerText = 'Field cannot be empty';
    else {
        if (taskList.has(srchTask)) {
            const msg = `Task found \nTask : ${srchTask}`;
            document.getElementById('notify').innerText = msg;
        }
        else {
            const msg = `Task not found`;
            document.getElementById('notify').innerText = msg;
        }
        document.getElementById('inpTask').value = ``;
    }
}

function deleteTask() {
    const delTask = document.getElementById('inpTask').value.toUpperCase();
    if (delTask.trim() === '') {
        document.getElementById('notify').innerText = 'Field cannot be empty';
    }
    else {
        const isDelete = taskList.delete(delTask);
        if (isDelete) {
            const msg = `Task deleted`;
            document.getElementById('notify').innerText = msg;
        }
        else {
            const msg = `Task doesn't exist`;
            document.getElementById('notify').innerText = msg;
        }
        document.getElementById('inpTask').value = ``;
    }
}

function hideTask() {
    document.getElementById('notify').innerText = ` `;
}

