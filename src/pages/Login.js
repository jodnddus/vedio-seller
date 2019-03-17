import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: ''
        }
    }

    render() {
        return (
            <div className="LoginPanel">
                <h1>VEDIO-SELLER <span role="img" aria-label="movie">🎬</span></h1>
                <div id="input">
                    <Input labelName="Email" inputType="text" inputPlaceholder="Email"/>
                    <Input labelName="Password" inputType="text" inputPlaceholder="Password"/>
                </div>
                <div id="button">
                    <Button value="Sign In" className="btns"/>
                    <Button value="Sign Up" className="btns"/>
                </div>
            </div>
        );  
    }
}

export default Login;