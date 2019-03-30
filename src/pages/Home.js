import React, { Component } from 'react';
import Video from './../components/Video';
import './style/Home.css'

class Home extends Component {
    menuClick() {
        //옆에서 나오는 슬라이드 탭
    }

    render() {
        return (
            <div>
                <div id="header">
                    <div>VIDEO-SELLER<span role="img" aria-label="film"> 🎬</span></div>
                    <span role="img" aria-label="menu" id="menu" onClick={this.menuClick}>🗄</span>
                </div>
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