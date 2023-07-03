import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate('/nsfwIdentifier')
    }

    const [userData, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordChk: "",
    })

    const handleChange = (event) => {

        setData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmit = () => {

        // calling the route to the main page on submite button
        goToMainPage()

        const check = 
            userData.password === userData.passwordChk 
                ? 
                "matched"
                
                :

                alert("Password did not match")

    }
    return (
        <form className="register-form">
            <h1>Register</h1>
            <input
                type="text"
                placeholder="First Name"
                className="signin"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange} />
            <input
                type="text"
                placeholder="Last Name"
                className="signin"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange} />
            <input
                type="text"
                placeholder="email"
                className="signin"
                name="email"
                value={userData.email}
                onChange={handleChange} />
            <input
                type="password"
                placeholder="Enter password"
                className="signin"
                name="password"
                value={userData.password}
                onChange={handleChange} />
            <input
                type="password"
                placeholder="Re-Enter password"
                className="signin"
                name="passwordChk"
                value={userData.passwordChk}
                onChange={handleChange}
            />
            <button 
                className="signin-btn"
                onClick={onSubmit}>Register</button>
        </form>
    )
}

export default Register