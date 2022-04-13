import React, { useState } from 'react';

const Product = (props) => {
    const [ inStock, setInStock ] = useState(5);
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>Description: { props.desc }</p>
            <p>Cost : ${ props.cost }</p>
            <p>In sock: { inStock }</p>
            <button onClick={ (event) => setInStock(inStock - 1)}>Vuy { props.title }</button>
        </div>
    )
}

export default Product;