var endpointURL = "https://jsonplaceholder.typicode.com/todos";

async function fetchTodosFromAPI(){
  var initialTodos = await fetch(endpointURL);
  var jsonTodos = await initialTodos.json();
  return jsonTodos.splice(0, 10)
}

let fetchCalls = {
  todosFromApi : fetchTodosFromAPI
}

export default fetchCalls