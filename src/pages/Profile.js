import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_USER_BY_USERNAME, GET_VIDEO } from '../queryMutation';
import Video from './components/Video';
import './style/Profile.css'

class Profile extends Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        var userData = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            username: userData.username,
            email: userData.email,
            password: userData.password
        })
    }

    render() {
        var username = this.state.username;
        return (
            <div id="profile">
                <div id="info">
                    <h1>{this.state.username}'s Profile</h1>
                    <hr />
                    <h1>Info</h1>
                    Username: {this.state.username} <br/>
                    Email: {this.state.email}
                </div>
                <h1>My Videos</h1>
                <Query query={GET_USER_BY_USERNAME} variables={{ username }} >
                    {({ loading, error, data }) => {
                        if (loading) return `Get your videos`;
                        if (error) return `Error: ${error}`;
                        return (
                            <div id="myvideos">
                                {data.getUserByUsername.videoId.map(id => (
                                    //videoId = videoId.toString(),
                                    //console.log(typeof(videoId)),
                                    <Query query={GET_VIDEO} variables={{ id: id }}>
                                        {({ loading, error, data }) => {
                                            if (loading) return ``;
                                            if (error) return `${error}`;
                                            return (
                                                <div key={data.getVideoById.id} className="myvideoItem">
                                                    <Video
                                                        poster={data.getVideoById.medium_cover_image}
                                                        title={data.getVideoById.title}
                                                        id={data.getVideoById.id}
                                                    />
                                                </div>
                                                //<h1>{data.getVideoById.title}</h1>
                                            );
                                        }}
                                    </Query>
                                ))}
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default Profile;