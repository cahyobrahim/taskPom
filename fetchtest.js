async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

getData();

// Add The Error Handling
async function getTasks(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching tasks:", error);      
    }
}

getTasks();

//TEST
async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data.name + " & " + data.email);
    } catch (error) {
        console.error("Error fetching user:", error);      
    }
}

getUser();
