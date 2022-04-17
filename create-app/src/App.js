import React, {useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';
import './App.css';


function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
      <NinjaForm ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={ setNinjaBoxArray } />
      <NinjaDisplay ninjaboxArray={ ninjaBoxArray } />
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
