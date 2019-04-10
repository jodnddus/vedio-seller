import gql from 'graphql-tag';

export const GET_MOVIES = gql`
    query {
        getvideos(limit: 50) {
        id
        title
        rating
        genres
        medium_cover_image
    }
}
`;

export const GET_MOVIE_BYID = gql`
    query getVideoById($id: Int!) {
        getVideoById(id: $id) {
            id
            title
            rating
            genres
            description_intro
        }
    }
`;

export const GET_MOVIE_BYSG = gql`
    query getVideoBySuggestion($id: Int!) {
        getVideoBySuggestion(id: $id) {
            
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