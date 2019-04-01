import React from 'react';
import testimg from './style/test.jpg';
import './style/Video.css'

const Video = () => {
    return (
        <div className="videoItem">
            <img src={testimg} alt="hello jpg" />
            <h1>$38.00</h1>
        </div>
    );
}

export default Video;