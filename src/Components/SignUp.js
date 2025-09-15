import React, { useState } from "react";

const SignUp = () => {
    
    const [userInput, setUserInput] = useState("");
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }

    return (
        <form>
            <h2>Sign Up</h2>
            <div>
                <label For="username">Username:</label>
                <input type="text" id="username" onChange={handleUserInput} value={userInput} name="username" required />
            </div>
            <div>
                <label For="email">Email:</label>
                <input type="email" id="email" onChange={handleUserInput} value={userInput} name="email" required />
            </div>
            <div>
                <label For="password">Password:</label>
                <input type="password" id="password" onChange={handleUserInput} value={userInput} name="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default SignUp;