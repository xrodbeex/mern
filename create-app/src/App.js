import React, { useState } from 'react';
import './App.css';


function App() {
  const [newTodo, setNewTodo ] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    setTodos([... todos, newTodo]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    
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

      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <span>{todo}</span>
            <button onClick={(event) => {
              handleTodoDelete(i);
            }}>Delete</button>
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
