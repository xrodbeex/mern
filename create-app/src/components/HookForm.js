import React, { useState } from 'react';

const hookForm = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const changeForm = {
        textAlign: "left",
        width: "450px",
        margin: "auto",
    }

    const inputData = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

    return (
        <div>
            <form style={{ marginTop: "20px"}}>
                <div style={inputData}>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </div>
                <div style={inputData}>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text"
                        name="lastName"
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </div>
                <div style={inputData}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div style={inputData}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
                <div style={inputData}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </div>
            </form>
            <div style={ changeForm }>
                <h3 style={{ textAlign: 'center'}}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{ firstName }
                </p>
                <p>
                    <label>Last Name: </label>{ lastName }
                </p>
                <p>
                    <label>Email: </label>{ email }
                </p>
                <p>
                    <label>Password: </label>{ password }
                </p>
                <p>
                    <label>Confirm Password:</label>{ confirmPassword }
                </p>
            </div>
        </div>
    )
}
export default hookForm;