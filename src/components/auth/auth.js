import React, { Component } from 'react';

import './auth.css';

class auth extends Component {
    state={
        signupactive: false
    }

    signupactivator = () =>{
        console.log('hello')
        this.setState({
            signupactive: true
        })
    }

    signinactivator = () =>{
        this.setState({
            signupactive: false
        })
    }

    render(){
        return(
            <div className={this.state.signupactive? "container right-panel-active" : "container"} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <span>by using your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost"  onClick={this.signinactivator}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={this.signupactivator}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default auth ;