import React from 'react';
import testimg from './test.jpg';
import './Video.css'

const Video = () => {
    return (
        <div>
            <img src={testimg} alt="hello jpg" />
            <h1>$38.99</h1>
        </div>
    );
}

export default Video;