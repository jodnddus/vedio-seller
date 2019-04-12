import React from 'react';
import { Query } from 'react-apollo';
import { GET_VIDEO } from '../queries';

const Videos = ({
    match: {
        params: { videoId }
    }
}) => {
    var id = parseFloat(videoId);
    return (
        <Query query={GET_VIDEO} variables={{id}}>
            {({ loading, error, data }) => {
                if (loading) return <h1>{videoId} is loading...</h1>;
                if (error) return `Error: ${error} videoId: ${videoId} videoId's Type: ${typeof(videoId)}`;
                return (
                    <React.Fragment> 
                        {data.getVideoById.title}<br />
                        {data.getVideoById.rating}<br />
                        {data.getVideoById.genres}<br />
                        {data.getVideoById.description_intro}description_intro
                        <img src={data.getVideoById.medium_cover_image} alt="poster"/>
                    </React.Fragment>
                );
            }}
        </Query>
    );
}

export default Videos;