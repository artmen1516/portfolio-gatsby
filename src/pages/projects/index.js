import React from "react";
import Layout from "../../modules/Layout";
import { graphql } from "gatsby";
import FeaturedCard from "../../components/FeaturedCard";
import TransitionEffect from "../../components/TransitionEffect";

function Projects({ data }) {

  return (
    <>
      <TransitionEffect/>
      <Layout>
          <main className='min-h-[calc(100vh-10.88rem)] flex flex-col gap-10 bg-background'>
            <div className="bg-background p-5 md:pt-20">
              <h1 className='text-3xl 4xl:text-5xl font-semibold text-textPrimary pb-5'>
                Projects
              </h1>
              <div className='flex flex-col w-full lg:flex-row gap-5 pb-5 justify-center'>
                {data.allSanityProject.projects.map((project) => (
                    <FeaturedCard project={project} />
                ))}
              </div>
            </div>
          </main>
      </Layout>
    </>
  );
}

export default Projects;

export const Head = () => <title>Projects</title>

export const pageQuery = graphql`
  query SanityProjects {
    allSanityProject {
      projects: nodes {
        _key
        title
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        year
        type
        _rawText
      }
    }
  }
`;
