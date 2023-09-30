import { graphql } from "gatsby";
import React from "react";
import { isoToReadableDate } from "../../utils/iso-to-normal-date";
import Layout from "../../modules/Layout";
import RichText from "../../components/RichText";
import TransitionEffect from "../../components/TransitionEffect";

const Post = ({ data }) => {
  const { sanityPost } = data;
  return (
    <>
      <TransitionEffect/>
      <Layout>
        <div>
          <main className='min-h-[calc(100vh-10.88rem)] m-auto flex flex-col gap-10 p-5 md:pt-20'>
            <div>
              <h1 className='text-3xl sm:text-5xl font-semibold text-textPrimary text-center pb-2'>
                {sanityPost.title}
              </h1>
              <div className='flex items-center gap-5 text-center justify-center'>
                <span className='bg-primary rounded-full text-textPrimary font-semibold px-4'>
                  {isoToReadableDate(sanityPost._createdAt)}
                </span>
                <span className='text-xl font-semibold text-textSecondary'>
                  {sanityPost.labels.join(", ")}
                </span>
              </div>
            </div>
            <RichText blockContent={sanityPost._rawContent} />
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Post;

export const pageQuery = graphql`
  query SanityPost($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _id
      _createdAt
      title
      slug {
        current
      }
      labels
      _rawContent
    }
  }
`;
