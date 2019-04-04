import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import './style/Login.css'

class Login extends Component {
    state = {
        username: '', 
        email: '', 
        password: '',
        logined: false
    };

    constructor(props) {
        super(props);
        this.signinClickListener = this.signinClickListener.bind(this);
        this.signiupClickListener = this.signiupClickListener.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    componentDidUpdate() {
        if(this.state.email === '') {                               //없을 때
            this.alertPanel('emailValidOrNoneInput');
        } else if(this.checkEmail(this.state.email) === true) {     //유효 할 때
            this.alertPanel('emailValidOrNoneInput');
        } else if(this.checkEmail(this.state.email) === false) {    //이메일이 유효하지 않을 때
            this.alertPanel('emailFormNotValid', '이메일이 유효하지 않음');
        }

    }
    
    signinClickListener() {
        console.log('Username: ' + this.state.username);
        console.log('Email: ' + this.state.email);
        console.log('Password: ' + this.state.password);

        try {
            axios.post('http://localhost:4000/login', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then((res) => {
                if(res.data === `No result`) {
                    this.alertPanel('noneResult', '일치하는 정보가 없음');
                } else if (res.data === `No email: ${this.state.email}`) {
                    this.alertPanel('noneEmail', '이메일이 일치하지 않음');
                } else if (res.data === `No password: ${this.state.password}`) {
                    this.alertPanel('nonePassword', '비밀번호가 일치하지 않음');
                } else {
                    document.location.href = '/home';
                    this.setState({logined: true});
                }
            });
        } catch (error) {
            console.log(`Error is ${error}`);
        }
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
            }).then((res) => {
                console.log(res);
            });
        } catch (error) {
            console.error(`Error is: ${error}`);
        }

        document.location.href = '/';
    }

    checkEmail(str) {
        //이메일 유효성 검증 정규식
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (regExp.test(str)) return true;
        else return false;
    }

    alertPanel(flag, msg) {
        let element = document.querySelector('.alertPanel');

        if (flag === 'emailFormNotValid') {
            element.classList.add('animated', 'slideInDown', 'faster');
            element.style.display = 'flex';
            element.textContent = msg;
        } else if (flag === 'emailValidOrNoneInput') {
            element.style.display = 'none';
        } else if (flag === 'noneEmail') {
            element.classList.add('animated', 'slideInDown', 'faster');
            element.style.display = 'flex';
            element.textContent = msg;
        } else if (flag === 'nonePassword') {
            element.classList.add('animated', 'slideInDown', 'faster');
            element.style.display = 'flex';
            element.textContent = msg;
        } else if (flag === 'noneResult') {
            element.classList.add('animated', 'slideInDown', 'faster');
            element.style.display = 'flex';
            element.textContent = msg;
        }
    }

    //state 세팅 함수
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
            <div>
                <Helmet>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
                </Helmet>
                <div id="loginPage">
                    <div className="alertPanel"></div>
                    <div className="LoginPanel">
                        <h1>VIDEO-SELLER <span role="img" aria-label="movie">🎬</span></h1>
                        <div id="input">
                            <Input labelName="Email" inputType="email" inputPlaceholder="Email" onChange={this.emailChange}/>
                            <Input labelName="Username" inputType="text" inputPlaceholder="Username" onChange={this.usernameChange}/>
                            <Input labelName="Password" inputType="password" inputPlaceholder="Password" onChange={this.passwordChange}/>
                        </div>
                        <div id="button">
                            <Button value="Sign In" className="btns" handleClick={this.signinClickListener}/>
                            <Button value="Sign Up" className="btns" handleClick={this.signiupClickListener}/>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Login;