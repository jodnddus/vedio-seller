import gql from 'graphql-tag';

export const GET_VIDEOS = gql`
    query {
        getvideosByLimit(limit: 50) {
            id
            title
            rating
            genres
            medium_cover_image
        }
    }
`;

export const GET_VIDEO = gql`
    query getVideoById($id: Float!){
        getVideoById(id: $id) {
            id
            title
            rating
            genres
            description_intro
            medium_cover_image
        }
        getVideoBySuggest(id: $id) {
            id
            title
            medium_cover_image
        }
    }   
`;

export const SIGN_UP = gql`
    mutation SIGN_UP_USER($username: String!, $email: String!, $password: String!) {
        signUpUser(username: $username, email: $email, password: $password) {
            username
            email
        }
    }
`;

export const SIGN_IN = gql`
    mutation SIGN_IN_USER($username: String!, $email: String!, $password: String!) {
        signInUser(username: $username, email: $email, password: $password) {
            username
        }
    }
`;

export const ADD_STAR_VIDEO = gql`
    mutation addStarVideo($videoId: Float!, $username: String!) {
        addStarVideo(videoId: $videoId, username: $username)
    }
`;