import { gql } from '@apollo/client';

export const GetHeroHomeInfo = gql`
  query GetHeroHomeInfo {
    personalInformationCollection(limit: 1) {
      items {
        name
        photo {
          title
          url
        }
        cv {
          url
        }
        bgVideo {
          url
        }
        shortDescription
      }
    }
  }
`;
export const GetNavbarInfo = gql`
  query GetNavbarInfo {
    personalInformationCollection(limit: 1) {
      items {
        name
        userName
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
export const GetAboutMeInfo = gql`
  query GetAboutMeInfo {
    personalInformationCollection(limit: 1) {
      items {
        cover {
          title
          url
        }
        aboutMe
      }
    }
  }
`;
