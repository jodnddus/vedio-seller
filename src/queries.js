import gql from 'graphql-tag';

export const GET_MOVIES = gql`
    query {
        videos(limit: 50) {
        id
        title
        rating
        genres
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