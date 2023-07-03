import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () =>{

    const navigate = useNavigate()

    const goToMainPage = () =>{
        navigate('/nsfwIdentifier')
    }
    return (
        <form className="signin-form">
            <h1>Login</h1>
            <input type="text" placeholder="Username or Email" className="signin" />
            <input type="password" placeholder="Enter password" className="signin"/>
            <button className="signin-btn" onClick={goToMainPage}>Sign In</button>
            <div className="lower">
                <div className="newuser">
                    <h3>New User ?</h3>
                    <h3><Link to={'/register'} className="no-text-decor" >Register</Link></h3>
                </div>
                <h3 className="newuser"><Link to={'/error'} className="no-text-decor">Forgot Password ?</Link></h3>
            </div>
        </form>
    )
}

export default SignIn