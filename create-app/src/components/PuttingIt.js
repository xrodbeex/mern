import React, { useState } from 'react'


const PuttingIt = (props) => {
    const [ inState, setInState ] = useState(props.initialAge);
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {inState}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ (event) => setInState(inState + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PuttingIt;