import React, { Component } from 'react';
import Video from './../components/Video';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div id="header">VIDEO-SELLER 🎬</div>
                <div id="container">
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                </div>
            </div>
        );
    }
}

export default Home;