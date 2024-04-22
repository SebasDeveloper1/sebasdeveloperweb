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
export const GetToolList = gql`
  query GetToolList {
    toolCollection(order: sys_firstPublishedAt_ASC) {
      items {
        name
        description
        url
        logo {
          title
          url
        }
      }
    }
  }
`;
export const GetHomeProjects = gql`
  query GetHomeProjects {
    projectsCollection(order: sys_firstPublishedAt_DESC, limit: 5) {
      items {
        name
        slug
        level
        imagesCollection {
          items {
            title
            url
          }
        }
      }
    }
  }
`;
export const GetHomeExperience = gql`
  query GetHomeExperience {
    jobExperienceCollection(order: sys_firstPublishedAt_DESC) {
      items {
        jobTitle
        type
        startDate
        endDate
        companyName
        description
        url
      }
    }
  }
`;
export const GetProjectsList = gql`
  query GetProjectsList {
    projectsCollection(order: sys_firstPublishedAt_DESC) {
      items {
        name
        slug
        level
        levelkey
        imagesCollection {
          items {
            title
            url
          }
        }
      }
    }
  }
`;

export const GetProjectDetails = ({ slug }: { slug: string }) => gql`
  query GetProjectDetails {
    projectsCollection(where: { slug: "${slug}" }) {
      items {
        name
        type
        category
        level
        device
        description
        tools
        linkView
        linkRepo
        imagesCollection {
          items {
            title
            url
          }
        }
      }
    }
  }
`;
