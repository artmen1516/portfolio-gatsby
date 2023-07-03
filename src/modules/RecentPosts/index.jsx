import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import PostCard from '../../components/PostCard'

function RecentPosts() {
  const { recentSanityPosts: { posts } } = useStaticQuery(query)
  return (
    <div className='bg-slate-200 border-b-4 border-slate-200'>
      <div className='m-auto flex flex-col items-start lg:mx-32 bg-white px-5 lg:px-16'>
        <div className='flex justify-between m-auto w-full text-left py-5'>
          <span className='text-md sm:text-2xl lg:text-3xl font-normal'>Recent posts</span>
          <Link to='/blog' className='font-semibold text-blue-600'>View all</Link>

        </div>
        <div className='flex flex-col w-full lg:flex-row gap-5 pb-5 justify-center'>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentPosts

const query = graphql`
query RecentPost {
  recentSanityPosts: allSanityPost(limit: 3, sort: {_updatedAt: DESC}){
    posts: nodes {
      _updatedAt
      id
      title
      labels
      slug {
        current
      }
      excerpt(limit: 200)
      _rawContent
    }
  }
}
`