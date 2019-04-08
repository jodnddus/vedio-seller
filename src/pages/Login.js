import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Mutation } from 'react-apollo';
import Input from './components/Input';
import Button from './components/Button';
import { SIGN_IN, SIGN_UP } from '../queries';
import './style/Login.css'

class Login extends Component {
    state = {
        username: '', 
        email: '', 
        password: '',
    };

    constructor(props) {
        super(props);
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
            element.style.backgroundColor = 'tomato';
            element.style.display = 'flex';
            element.textContent = msg;
        } else if (flag === 'signUpSuccess') {
            element.classList.add('animated', 'slideInDown', 'faster');
            element.style.backgroundColor = 'green';
            element.style.display = 'flex';
            element.textContent = msg;
        } else if (flag === 'emailValidOrNoneInput') {
            element.style.display = 'none';
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
                            <Mutation mutation={ SIGN_IN }>
                                {(signInUser, { data }) => (
                                    <Button value="Sign In" className="btns" handleClick={e => {
                                        signInUser({ variables: { username: this.state.username,
                                                                  email: this.state.email,
                                                                  password: this.state.password }}).then(res => {
                                                                        if(res.data.signInUser.username === this.state.username) {
                                                                            localStorage.setItem("userData", JSON.stringify(this.state));
                                                                            console.log(localStorage.getItem("userData"));
                                                                            document.location.href = '/home';
                                                                        }
                                                                  });
                                    }}/>
                                )}
                            </Mutation>
                            <Mutation mutation={ SIGN_UP }>
                                {(signUpUser, { data }) => (
                                    <Button value="Sign Up" className="btns" handleClick={e => {
                                        signUpUser({ variables: { username: this.state.username,
                                                                  email: this.state.email,
                                                                  password: this.state.password }}).then(res => {
                                                                      if(res.data.signUpUser.username === this.state.username) {
                                                                          this.alertPanel('signUpSuccess', '회원가입 성공');
                                                                      }
                                                                  })
                                    }}/>
                                )}
                            </Mutation>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Login;