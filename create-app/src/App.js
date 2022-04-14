import React from 'react';
import './App.css';
import PuttingIt from './components/PuttingIt';

//Putting it together
function App() {
  return (
    <div className="App">
      <PuttingIt
        firstName={"Jane"}
        lastName={"Doe"}
        hairColor={"Black"}
        initialAge={30}
        />
      <PuttingIt
        firstName={"John"}
        lastName={"Smith"}
        hairColor={"Brown"}
        initialAge={25}
        />
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
