import { graphql } from "gatsby";
import React from "react";
import { isoToReadableDate } from "../../utils/iso-to-normal-date";
import Layout from "../../modules/Layout";
import RichText from "../../components/RichText";

const Project = ({ data }) => {
  const { sanityProject } = data;
  return (
    <Layout>
      <div className='w-full bg-background'>
        <main className='m-auto flex flex-col gap-10 p-5 md:p-16 lg:py-24 lg:mx-32 bg-background'>
          <h1 className='text-3xl sm:text-5xl font-semibold text-textPrimary text-center'>
            {sanityProject.title}
          </h1>
          <div className='flex items-center gap-5 text-center justify-center'>
            <span className='bg-primary rounded-full text-white font-semibold px-4'>
              {isoToReadableDate(sanityProject._createdAt)}
            </span>
            <span className='text-xl font-semibold text-textSecondary'>
              {sanityProject.type.join(", ")}
            </span>
          </div>
          <RichText blockContent={sanityProject._rawText} />
        </main>
      </div>
    </Layout>
  );
};

export default Project;

export const pageQuery = graphql`
  query SanityProject($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      _id
      _createdAt
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
`;
