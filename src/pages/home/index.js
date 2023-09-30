import React from "react";
import { graphql } from 'gatsby'
import IndexPage from "..";
import TransitionEffect from "../../components/TransitionEffect";

function HomePage({ data }) {
  return (
    <>
    <TransitionEffect/>
    <IndexPage data={data} />
    </>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
query Home {
    sanityHomePage(_type: { eq: "homePage" }) {
    _type
    _createdAt
    _updatedAt
    modules {
        ...SanityHero
        ...SanityFeatureProjects
        ...SanityRecentPosts
    }
    }
}
`