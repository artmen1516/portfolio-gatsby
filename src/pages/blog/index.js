import React from "react";
import { graphql } from "gatsby";
import Layout from "../../modules/Layout";
import PostCard from "../../components/PostCard";

function Blog({ data }) {
  return (
    <Layout>
      <main className='m-auto xl:px-32 flex flex-col gap-10 bg-background'>
        <div className="bg-background px-5 lg:px-16 pt-5 lg:pt-20">
          <h1 className='text-3xl sm:text-5xl font-semibold text-textPrimary pb-5'>
            Blog
          </h1>
          {data.allSanityPost.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
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
