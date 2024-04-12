import { gql } from '@apollo/client';

export const GetPersonalInfo = gql`
  query GetPersonalInfo {
    personalInformationCollection(limit: 1) {
      items {
        name
        shortDescription
        photo {
          title
          url
        }
        cv {
          url
        }
      }
    }
  }
`;
