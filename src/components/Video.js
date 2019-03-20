import React from 'react';
import testimg from './test.jpg';
import './Video.css'

const Video = () => {
    return (
        <div className="videoItem">
            <img src={testimg} alt="hello jpg" />
            <h1>$38.00</h1>
        </div>
    );
}

export default Video;