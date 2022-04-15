import React, { useState } from 'react';

const HookForm = (props) => {
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
            <form onSubmit={() => {}} style={{ marginTop: "20px"}}>
                <div style={inputData}>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </div>
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                ) : null}
                <div style={inputData}>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text"
                        name="lastName"
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}
                <div style={inputData}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                {email.length < 2 && email.length > 0 ? (
                    <p>Email must be at least 2 characters</p>
                ) : null}
                <div style={inputData}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
                {password.length < 2 && password.length > 0 ? (
                    <p>Password must be at least 8 charaters</p>
                ) : null}
                {password !== confirmPassword ? 
                    <p>Password and Confirm password must match</p> : null}
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
};



export default HookForm;