import React from 'react';
import '../login.css'
import loginImage from '../images/login-image.svg';


const Login = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-6">
                    <img className="login-image" src={loginImage}></img>
                </div>
                
                    <div className="col-sm-6">
                        <h1 className="login-welcome">It's a Good Day to be Productive</h1>
                        <form className="login-form">
                            <input placeholder="name" type="text" className="row" id="name-login"></input>
                            <input placeholder="password" type="text" className="row" id="password-login"></input>
                            <button type="submit" className="login-btn">Login</button>
                        </form>
                    </div>
            </div>

            <hr className = "hr-line-login"></hr>
            <div classname="">
                <p>either information about the benefits of being productive or an about me section</p>
            </div> 
        </div>
    )
}

export default Login;