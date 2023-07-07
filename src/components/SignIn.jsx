import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () =>{

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        isSignedIn : false
    })
    
    const [authStatus, setAuthStatus] = useState('');


    const navigate = useNavigate()


       useEffect(() => {
         // connecting to backend

        const fetchData =  async () => {
            const response = await fetch('http://localhost:5000/')
            const data = await response.json()
                if (data[0].email === userData.email && data[0].password === userData.password){
                setAuthStatus("success")
            } else {
                setAuthStatus("failed")
             }
            console.log(data)
        }

        
        fetchData()
        
    }, [userData])
    


    // handling events

    const handleChange = (event) =>{
        
        const {name, value} = event.target

        setUserData(prev => ({
            ...prev,
            [name] : value
        }))

    }


    const goToMainPage = () =>{
        authStatus === "success" ?
        navigate('/nsfwIdentifier') :
        alert("wrong password or email")
    }

    return (
        <form className="signin-form">
            <h1>Login</h1>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} className="signin" />
            <input type="password" placeholder="Enter password" name="password" onChange={handleChange} className="signin"/>
            <button className="signin-btn" onClick={goToMainPage}>Sign In</button>
            <div className="lower">
                <div className="newuser">
                    <h3>New User ?</h3>
                    <h3><Link to={'/register'} className="no-text-decor">Register</Link></h3>
                </div>
                <h3 className="newuser"><Link to={'/error'} className="no-text-decor">Forgot Password ?</Link></h3>
            </div>
        </form>
    )
}

export default SignIn


