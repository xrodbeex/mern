import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Jane"}
        lastName={"Doe"}
        age={18}
        hairColor={"black"}/>
      <PersonCard 
        firstName={"Smith"}
        lastName={"John"}
        age={88}
        hairColor={"brown"}/>
      <PersonCard 
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hairColor={"black"}/>
    </div>
  );
}

export default App;
