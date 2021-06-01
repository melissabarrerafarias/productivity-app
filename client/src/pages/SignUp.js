import React from 'react'; 
import '../signup.css'
import signupImage from '../images/time-manage.svg';

const SignUp = () => {
    return (
        <div className="container">
        <div className="row mt-5">
            <div className="col-sm-6">
                <img className="signup-image" src={signupImage}></img>
            </div>
            
                <div className="col-sm-6">
                    <h1 className="signup-welcome">Make the Most of Your Day</h1>
                    <form className="signup-form">
                        <input placeholder="name" type="text" className="row" id="name-signup"></input>
                        <input placeholder="password" type="text" className="row" id="password-signup"></input>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                </div>
        </div>

        <hr className = "hr-line-signup"></hr>

        <div classname="">
            <p>either information about the benefits of being productive or an about me section</p>
        </div> 

    </div>
    )
}

export default SignUp; 