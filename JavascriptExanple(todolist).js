<script>
let tasks = []; // Array to store tasks

function addTask(task) {
tasks.push({ task: task, completed: false });
console.log(`Added: "${task}"`);
}

function removeTask(index) {
  if (index >= 0 && index <tasks.length) {
console.log(`Removed: "${tasks[index].task}"`);
tasks.splice(index, 1);
  } else {
console.log("Invalid task number.");
  }
}

function completeTask(index) {
  if (index >= 0 && index <tasks.length) {
    tasks[index].completed = true;
console.log(`Marked as completed: "${tasks[index].task}"`);
  } else {
console.log("Invalid task number.");
  }
}

function showTasks() {
console.log("\nTo-Do List:");
  if (tasks.length === 0) {
console.log("No tasks available.");
  } else {
tasks.forEach((task, index) => {
const status = task.completed ? "Done" : "Not Done";
console.log(`${index + 1}. [${status}] ${task.task}`);
    });
  }
console.log(""); // For spacing
}

// Example usage
console.log("Welcome to your To-Do List!\n");

addTask("Learn JavaScript");
addTask("Build a project");
showTasks();

completeTask(0);
showTasks();

removeTask(1);
showTasks();
</script>