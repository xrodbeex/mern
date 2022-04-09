import React from 'react';


const ParentComponent = (props) => {
    return (
        <div>
            <ChildComponent firstName={"Rodney"} lastName={"Bautista"}/>
        </div>
    );
}


const ChildComponent = (props) => {
    return (
        <p>
            Hello! My name is {props.firstName} {props.lastName}
        </p>
    )
};

