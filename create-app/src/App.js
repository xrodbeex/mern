import React from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Product 
        title={"Dehydrated Water"}
        desc={"Just add 2 cups of water"}
        cost={ 49.99 } />
      <Product 
        title={"Toy Car"}
        desc={"Made out of legos"}
        cost={ 19.99 } />
      <Product 
        title={"Ipad"}
        desc={"Really expensive toy"}
        cost={ 499.99 } />
    </div>
  );
}

export default App;
