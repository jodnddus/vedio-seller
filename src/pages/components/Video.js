import React from 'react';
import testimg from './style/test.jpg';
import './style/Video.css'

const Video = (src, title, id) => {
    return (
        <div className="videoItem" key={id}>
            <img src={src} alt="hello jpg" />
            <h1>{title}</h1>
        </div>
    );
}

export default Video;