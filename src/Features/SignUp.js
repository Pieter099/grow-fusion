import React, { useState } from "react";
import "../Styles/signUp.css"

const SignUp = () => {
    
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleUserInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <h2>Sign Up</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input 
                  type="text" 
                  id="username" 
                  onChange={handleUserInput} 
                  value={formData.username} 
                  name="username" 
                  placeholder="Enter your username"
                  autoComplete="username"
                  required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  onChange={handleUserInput} 
                  value={formData.email} 
                  name="email" 
                  placeholder="Enter your email"
                  autoComplete="email"
                  required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input 
                  type="password" 
                  id="password" 
                  onChange={handleUserInput} 
                  value={formData.password} 
                  name="password" 
                  placeholder="Enter your password"
                  autoComplete="password"
                  required />
            </div>
            <button type="submit" className="submit-btn" >Register</button>
        </form>
    )
}

export default SignUp;