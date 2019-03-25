import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import './style/Login.css'

class Login extends Component {
    state = {
        username: '', 
        email: '', 
        password: ''
    };

    constructor(props) {
        super(props);
        this.signinClickListener = this.signinClickListener.bind(this);
        this.signiupClickListener = this.signiupClickListener.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }
    
    signinClickListener() {
        console.log('Username: ' + this.state.username);
        console.log('Email: ' + this.state.email);
        console.log('Password: ' + this.state.password);
    }

    signiupClickListener() {
        console.log('Username: ' + this.state.username);
        console.log('Email: ' + this.state.email);
        console.log('Password: ' + this.state.password);

        try {
            axios.post('http://localhost:4000/register', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        } catch (error) {
            console.error(`Error is: ${error}`);
        }
        //document.location.href = '/register';
    }

    usernameChange(event) {
        this.setState({username: event.target.value})
    }

    emailChange(event) {
        this.setState({email: event.target.value})
    }

    passwordChange(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="LoginPanel">
                <h1>VEDIO-SELLER <span role="img" aria-label="movie">🎬</span></h1>
                <form>
                    <div id="input">
                        <Input labelName="Username" inputType="text" inputPlaceholder="Username" onChange={this.usernameChange}/>
                        <Input labelName="Email" inputType="email" inputPlaceholder="Email" onChange={this.emailChange}/>
                        <Input labelName="Password" inputType="password" inputPlaceholder="Password" onChange={this.passwordChange}/>
                    </div>
                    <div id="button">
                        <Button value="Sign In" className="btns" handleClick={this.signinClickListener}/>
                        <Button value="Sign Up" className="btns" handleClick={this.signiupClickListener}/>
                    </div>
                </form>
            </div>
        );  
    }
}

export default Login;