import React, { useState } from "react";
import "../Styles/signUp.css"

const SignUp = () => {
    
    const [userInput, setUserInput] = useState("");
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }

    return (
        <form>
            <h2>Sign Up</h2>
            <div className="form-group">
                <label For="username">Username:</label>
                <input type="text" id="username" onChange={handleUserInput} value={userInput} name="username" required />
            </div>
            <div className="form-group">
                <label For="email">Email:</label>
                <input type="email" id="email" onChange={handleUserInput} value={userInput} name="email" required />
            </div>
            <div className="form-group">
                <label For="password">Password:</label>
                <input type="password" id="password" onChange={handleUserInput} value={userInput} name="password" required />
            </div>
            <button type="submit" className="submit-btn" >Register</button>
        </form>
    )
}

export default SignUp;