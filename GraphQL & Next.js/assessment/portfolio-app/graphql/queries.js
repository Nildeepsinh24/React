import { gql } from '@apollo/client/core';

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      id
      name
      bio
    }
    links {
      id
      title
      url
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($name: String!, $bio: String!) {
    updateProfile(name: $name, bio: $bio) {
      id
      name
      bio
    }
  }
`;
