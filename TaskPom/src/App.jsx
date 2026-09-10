import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import {useState, useEffect} from "react";
import PomodoroTimer from "./PomodoroTimer";

function App() {

  return(
    <div>
      <h1>TaskPom</h1>
      <PomodoroTimer />
    </div>
  )

  // const [secondsLeft, setSecondsLeft] = useState(10);
  // const [isRunning, setIsRunning] = useState(false); 

  // useEffect(() => {
  //   if (!isRunning || secondsLeft <= 0) return; // Stop the countdown when it reaches 0

  //   const intervalId = setInterval(() => {
  //     setSecondsLeft(prev => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  // }, [secondsLeft, isRunning]); // Dependency array ensures this runs when 'secondsLeft' or 'isRunning' changes

  // return (
  //   <div>
  //     <h1>{secondsLeft > 0 ? `Countdown: ${secondsLeft} seconds left` : "Time's up!"}</h1>
  //     <button onClick={() => setIsRunning(!isRunning)}>
  //       {isRunning ? "Pause" : "Start"}
  //     </button>
  //     <button onClick={() => {setSecondsLeft(10); setIsRunning(false);}}>Reset</button>
  //   </div>
  // );

  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   async function fetchTodos() {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  //       const data = await response.json();
  //       setTodos(data);
  //     } catch (error) {
  //       console.error("Error fetching todos:", error);
  //       setError("Failed to fetch todos.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchTodos();
  // }, []); // Empty dependency array means this runs only once after the initial render

  // return(
  //   <div>
  //     <h1>Todos List From API</h1>
  //     <ul>
  //       {todos.map(todo => (
  //         <li key={todo.id}> {todo.title} </li>
  //       ))}
  //     </ul>
  //     {loading && <p>Loading todos...</p>}
  //     {error && <p style={{ color: "red" }}>{error}</p>}
  //   </div>
  // )

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("This run every time the component renders.");
  //   console.log("Current count value:", count);
  // }, [count]); // Dependency array ensures this runs only when 'count' changes

  // return(
  //   <div>
  //     <h1>Counter: {count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //     <button onClick={() => setCount(count - 1)}>Decrement</button>
  //   </div>
  // )

  // TASK MANAGER 
  // const [tasks, setTasks] = useState([]);
  // const [title, setTitle] = useState("");
  // const [error, setError] = useState("");
  // const [filter, setFilter] = useState("all"); // New state for filter

  // function handleAddTask() {
  //   if (title.trim() === "") {
  //     setError("Task title cannot be empty.");
  //     return;
  //   }

  //   const newTask = {id: Date.now(), title: title, done: false};
  //   setTasks([...tasks, newTask]);
  //   setTitle(""); // Clear the input after add
  //   setError(""); // Clear any previous error
  // }

  // function handleToggle(id) {
  //   setTasks(
  //     tasks.map(task => 
  //       task.id === id ? {...task, done : !task.done} : task
  //     )
  //   );
  // }

  // function handleDelete(id) {
  //   if (window.confirm("Are you sure you want to delete this task?")) {
  //     setTasks(tasks.filter(task => task.id !== id));
  //   }
  // }

  // let visibleTasks = tasks;
  // if (filter === "active") {
  //   visibleTasks = tasks.filter(task => task.done === false);
  // } else if (filter === "completed") {
  //   visibleTasks = tasks.filter(task => task.done === true);
  // }

  // return(
  //   <div>
  //     <h1>My Task</h1>
  //     {error && <p style={{ color: "red" }}>{error}</p>}
  //     <input
  //       placeholder = "New Task Title"
  //       type = "text"
  //       value = {title}
  //       onChange = {(e) => {
  //         setTitle(e.target.value)
  //         if (error) {
  //           setError(""); // Clear error when user starts typing
  //         }
  //       }}
  //       onKeyDown = {(e) => {
  //         if (e.key === "Enter") {
  //           handleAddTask();
  //         }
  //       }}
  //     />
  //     <button onClick={handleAddTask}>Add Task</button>

  //     <div>
  //       <button onClick={() => setFilter("all")} style = {{ fontWeight: filter === "all" ? "bold" : "normal" }}>All</button>
  //       <button onClick={() => setFilter("active")} style = {{ fontWeight: filter === "active" ? "bold" : "normal" }}>Active</button>
  //       <button onClick={() => setFilter("completed")} style = {{ fontWeight: filter === "completed" ? "bold" : "normal" }}>Completed</button>
  //     </div>

  //     <p>{visibleTasks.length} task(s) shown</p>

  //     <ul>
  //       {visibleTasks.map(task => (
  //         <li key={task.id}>
  //           <span
  //             style={{ textDecoration: task.done ? "line-through" : "none" }}
  //           >
  //             {task.title}
  //           </span>
  //           <button onClick={() => handleToggle(task.id)}>
  //             {task.done ? "Undo" : "Done"}
  //           </button>
  //           <button onClick={() => handleDelete(task.id)}>Delete</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )

  // return(
  //   <div>
  //     <input
  //       placeholder = "Task Title"
  //       type = "text"
  //       value = {text}
  //       onChange = {(e) => setText(e.target.value)}
  //     />
  //     <input
  //       placeholder = "Task Description"
  //       type = "text"
  //       value = {description}
  //       onChange = {(e) => setDescription(e.target.value)}
  //     />
  //     <p>You typed: {text}</p>
  //     <p>Description: {description}</p>
  //   </div>
  // )

  // return (
  //   <>
  //     <Header />
  //     <About />
  //     <Projects />
  //     <Footer />
  //   </>
  // )
}

export default App;