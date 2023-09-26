import { graphql } from 'gatsby'

export const SanityRecentPosts = graphql`
  fragment SanityHero on SanityHero {
    _key
    _type
    firstTitle
    secondTitle
    subtitle
    resumeFile {
      asset {
        url
        originalFilename
      }
    }
    imageSrc {
      asset {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
    buttonLabel
  }
`