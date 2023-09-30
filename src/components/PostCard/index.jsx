import React from 'react'
import { isoToReadableDate } from '../../utils/iso-to-normal-date'
import { Link } from 'gatsby'

function PostCard({ post }) {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl p-0.5 mb-5'>
      <div className='flex flex-col gap-5 mx-auto p-5 rounded-xl bg-background min-h-full'>
        <h2 className='text-3xl 4xl:text-4xl font-semibold text-textPrimary hover:text-primary transition-all'><Link
          to={`/blog/${post.slug.current}`}
          className='rounded-lg overflow-hidden sm:flex-[1_1_0%]'>{post.title}
        </Link></h2>

        <div className='flex flex-row w-full m-auto gap-3 text-textSecondary 4xl:text-xl'>
          <p>{isoToReadableDate(post._updatedAt)}</p>
          <p> | </p>
          <p>{post.labels.join(', ')}</p>
        </div>
        <div>
          <p className='text-textSecondary 4xl:text-xl'>{post.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard