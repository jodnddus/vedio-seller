import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import dotenv from 'dotenv';
import './Login.css'

class Login extends Component {
    responseSuccess = (res) => {
        console.log(res)
    }

    responseFail = (err) => {
        console.log(err)
    }

    render() {
        return (
            <div className="LoginPanel">
                <GoogleLogin 
                    clientId="828024227175-bp17dp2hvkuigp5ut7477p700hpha5ji.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={this.responseSuccess}
                    onFailure={this.responseFail}/>
            </div>
        );  
    }
}

export default Login;