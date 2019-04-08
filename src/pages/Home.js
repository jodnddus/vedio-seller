import React from 'react';
import Video from './components/Video';
import { Query } from 'react-apollo';
import { GET_MOVIES } from '../queries';
import './style/Home.css';

export const Home = () => {
    return (
        <Query query={GET_MOVIES}>{({ loading, data, error }) => {
            if (loading) return <h1>LOADING</h1>
            if (error) return <h1>ERROR</h1>
            return (
                <div>
                    <div id="header">VIDEO-SELLER<span role="img" aria-label="film"> 🎬</span></div>
                    <div id="container">
                        {data.videos.map(video => (
                            <div key={video.id} className="videoItem">
                                <Video
                                    poster={video.medium_cover_image}
                                    title={video.title}
                                    id={video.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }}
        </Query>
    );
}

export default Home;