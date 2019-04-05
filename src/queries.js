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