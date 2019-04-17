import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_VIDEO, ADD_STAR_VIDEO } from '../queryMutation';
import Video from './components/Video'
import './style/Videos.css'

const Videos = ({
    match: {
        params: { videoId }
    }
}) => {
    var id = parseFloat(videoId);
    var userData = JSON.parse(localStorage.getItem('userData'));
    var username = userData.username;
    return (
        <Query query={GET_VIDEO} variables={{id}}>
            {({ loading, error, data }) => {
                if (loading) return <h1>{videoId} is loading...</h1>;
                if (error) return `Error: ${error} videoId: ${videoId} videoId's Type: ${typeof(videoId)}`;
                return (
                    <React.Fragment>
                        <div id="videoHeader">
                            <h1>{data.getVideoById.title}</h1>
                            <Mutation mutation={ADD_STAR_VIDEO}>
                                {(addStarVideo, { data }) => (
                                    <span role="img" aria-label="like" id="like" onClick={e =>{
                                        addStarVideo({ variables: { videoId: id, username: username}})
                                    }}>👍</span>
                                )}
                            </Mutation>
                            <p><span role="img" aria-label="star">⭐️</span>{data.getVideoById.rating}</p>
                            <p className="genres">{data.getVideoById.genres.map(genres => `${genres},`)}</p>
                        </div>
                        <br />
                        <div id="videoMain">
                            {data.getVideoById.description_intro}
                            <img src={data.getVideoById.medium_cover_image} alt="poster"/>
                        </div>
                        <div>
                            <h1>Suggestions</h1>
                            <div id="suggest">
                                {data.getVideoBySuggest.map(video => (
                                    <div key={video.id} className="suggestionVideoItem">
                                        <Video
                                            poster={video.medium_cover_image}
                                            title={video.title}
                                            id={video.id}
                                        />
                                    </div>  
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                );
            }}
        </Query>
    );
}

export default Videos;