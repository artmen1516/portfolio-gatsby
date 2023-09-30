import React from "react";
import { graphql } from "gatsby";
import Layout from "../../modules/Layout";
import PostCard from "../../components/PostCard";
import TransitionEffect from "../../components/TransitionEffect";

function Blog({ data }) {
  return (
    <>
      <TransitionEffect/>
      <Layout>
        <main className='min-h-[calc(100vh-10.88rem)] flex flex-col gap-10'>
          <div className="bg-background p-5 md:pt-20">
            <h1 className='text-3xl 4xl:text-5xl font-semibold text-textPrimary pb-5'>
              Blog
            </h1>
            {data.allSanityPost.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Blog;

export const Head = () => <title>Blog</title>

export const pageqQuery = graphql`
  query AllPosts {
    allSanityPost(sort: {_updatedAt: DESC}) {
      posts: nodes {
        _updatedAt
        id
        slug{
          current
        }
        title
        labels
        _rawContent
        excerpt(limit: 200)
      }
    }
  }
`;
