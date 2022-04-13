import React, { useState } from 'react';


const PersonCard = (props) => {
    const [ inStock, setInStock ] = useState(5);
    return (
        <div>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>Age:{ props.age} </p>
            <p>Hair Color: { props.hairColor} </p>
            <p>In Stock: { inStock }</p>
            <button onClick={ (event) => setInStock(inStock - 1)}>Buy {props.hairColor} </button>
        </div>
    )
}

export default PersonCard;