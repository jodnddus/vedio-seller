import React, { Component } from 'react';
import './style/Profile.css'

class Profile extends Component {
    state = {
        username: '', 
        email: '', 
        password: '',
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        var userData = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            username: userData.username,
            email: userData.email,
            password: userData.password
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.username}</h1>
            </div>
        );
    }
}

export default Profile;