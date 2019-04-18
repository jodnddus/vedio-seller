import React from 'react';
import { Link } from 'react-router-dom';
import Video from './components/Video';
import { Query } from 'react-apollo';
import { GET_VIDEOS } from '../queryMutation';
import './style/Home.css';

const Home = () => {
    return (
        <div>
            <div id="header">
                <span role="img" aria-label="film">VIDEO-SHARER 🎬</span>
                <Link to={'/profile'}>
                    <span role="img" aria-label="profile">🤷‍</span>
                </Link>
            </div>
            <div id="container">
                <Query query={GET_VIDEOS}>
                    {({ loading, data, error }) => {
                        if (loading) return <h1>LOADING</h1>
                        if (error) return <h1>ERROR</h1>
                        return (
                            data.getvideosByLimit.map(video => (
                                <div key={video.id} className="videoItem">
                                    <Video
                                        poster={video.medium_cover_image}
                                        title={video.title}
                                        id={video.id}
                                    />
                                </div>
                            ))
                        );
                    }}</Query>
            </div>
        </div>
    );
}

export default Home;