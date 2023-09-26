import React from "react";
import Layout from "../../modules/Layout";
import { graphql } from "gatsby";
import FeaturedCard from "../../components/FeaturedCard";

function Projects({ data }) {
  return (
    <Layout>
      <main className='m-auto xl:px-32 flex flex-col gap-10 bg-background'>
        <div className="bg-background px-5 lg:px-16 pt-5 lg:pt-20">
          <h1 className='text-3xl sm:text-5xl font-semibold text-textPrimary pb-5'>
            Projects
          </h1>
          {data.allSanityProject.projects.map((project, index) => (
            <div key={index} className='m-auto'>
              <FeaturedCard project={project} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
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
