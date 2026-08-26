function addTask(tasks, newTask) {
  return [...tasks, newTask];
}

function toggleTask(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}

function removeTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

function getActiveTasks(tasks) {
  return tasks.filter(task => !task.done);
}

function getCompletedTasks(tasks) {
  return tasks.filter(task => task.done);
}

function getAllTasks(tasks) {
  return tasks;
}

let tasks = [
  { id: 1, title: "Buy milk", done: false },
  { id: 2, title: "Walk dog", done: true },
];

tasks = addTask(tasks, { id: 3, title: "Read book", done: false });
//tasks = toggleTask(tasks, 1);
console.log(getActiveTasks(tasks));    // task 3 only
console.log(getCompletedTasks(tasks)); // tasks 1 and 2
//tasks = removeTask(tasks, 2);
console.log(tasks); // task 2 gone