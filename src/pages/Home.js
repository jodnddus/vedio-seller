import React, { Component } from 'react';
import Video from './../components/Video';
import './style/Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div id="header">VIDEO-SELLER<span role="img" aria-label="film"> 🎬</span></div>
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