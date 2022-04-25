import React, { useState } from 'react';
import './App.css';


function App() {
  const [newTodo, setNewTodo ] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([... todos, todoItem]);
    setNewTodo("");

  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <form 
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        <input 
          onChange={(event) => {
            setNewTodo(event.target.value);
        }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {
        todos.map((todo, i) => {
          const todoClasses = ["bold", "italic"];

          if (todo.complete) {
            todoClasses.push("line-through");
          }


          return (
            <div key={i}>
              <input onChange={(event) => {
                handleToggleComplete(i);
              }} checked={todo.complete} type="checkbox" />
              <span className={todoClasses.join(" ")}>{todo.text}</span>
              <button 
                onClick={(event) => {
                  handleTodoDelete(i);
              }}
                style={{ marginLeft: "10px"}}
              >
                Delete
              </button>
            </div>
        );
      })}
    </div>
  );
}












/*
PersonCard
function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Jane"}
        lastName={"Doe"}
        age={18}
        hairColor={"black"}
        initialStock={20}
        />
      <PersonCard 
        firstName={"Smith"}
        lastName={"John"}
        age={88}
        hairColor={"brown"}
        initialStock={10}
        />
      <PersonCard 
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hairColor={"black"}
        initialStock={7}
        />
    </div>
  );
}
*/





export default App;
