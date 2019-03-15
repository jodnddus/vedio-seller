import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Input from './../components/Input'
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
    GoogleresponseSuccess = (res) => {
        console.log(res);
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
        console.log(this.state.id);
        console.log(this.state.name);
    }
    GoogleresponseFail = (err) => {
        console.log(err)
    }
    

    render() {
        return (
            <div className="LoginPanel">
                <h1>VEDIO-SELLER <span role="img" aria-label="movie">🎬</span></h1>
                <Input></Input>
                <GoogleLogin 
                    clientId="828024227175-bp17dp2hvkuigp5ut7477p700hpha5ji.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={this.GoogleresponseSuccess}
                    onFailure={this.GoogleresponseFail}
                    />
            </div>
        );  
    }
}

export default Login;