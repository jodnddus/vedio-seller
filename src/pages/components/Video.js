import React from 'react';
import { Link } from 'react-router-dom';
import './style/Video.css'

const Video = ({poster, title, id}) => {
    return (
        <Link to={`/videos/${id}`}>
            <img src={poster} alt="hello jpg" />
            <h1>{title}</h1>
        </Link>
    );
}

export default Video;