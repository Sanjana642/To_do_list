document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Function to create a task item
    const createTaskItem = (taskText) => {
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
      taskContent.className = "task-content";
  
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(editBtn);
      taskItem.appendChild(deleteBtn);
  
      // Edit functionality
      editBtn.addEventListener("click", () => {
        const newTaskText = prompt("Edit your task:", taskContent.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
          taskContent.textContent = newTaskText.trim();
        }
      });
  
      // Delete functionality
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
  
      return taskItem;
    };
  
    // Add task functionality
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Task cannot be empty!");
        return;
      }
  
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    });
  
    // Allow pressing "Enter" to add a task
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });
  });
  