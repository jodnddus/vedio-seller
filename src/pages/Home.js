import React, { Component } from 'react';
import Video from './components/Video';
import { Query } from 'react-apollo';
import { GET_MOVIES } from '../queries';
import './style/Home.css'

class Home extends Component {
    render() {
        return (
            <Query query={GET_MOVIES}>{({loading, data, error}) => {
                if(loading) return "loding"
                if(error) return "error"
                return (
                    <div id="container">
                        {data.videos.map(video => (
                        <div key={video.id} className="videoItem">
                            <img src={video.medium_cover_image} alt="hello jpg" />
                            <h1>{video.title}</h1>
                        </div>
                        //<Video src={video.medium_cover_image} title={video.title} id={video.id} />
                        ))}  
                    </div>
                );
            }}
            </Query>

            /*<div id="main">
                <div>
                    <div id="header">
                        <div>VIDEO-SELLER<span role="img" aria-label="film"> 🎬</span></div>
                        <span role="img" aria-label="menu" id="menu" onClick={this.menuClick}>👤</span>
                    </div>
                    <div id="container">
                    </div>
                </div>
            </div>*/
        );
    }
}

export default Home;