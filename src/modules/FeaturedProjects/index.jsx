import React from 'react'
import FeaturedCard from '../../components/FeaturedCard'
import { Link } from 'gatsby-link'

function FeaturedProjects({ projects }) {
  return (
    <div className='bg-background'>
      <div className='m-auto flex flex-col items-start lg:mx-32 bg-background px-5 lg:px-16'>
        <div className='flex justify-between m-auto w-full text-left py-5'>
          <span className='text-md sm:text-2xl lg:text-3xl font-semibold text-textPrimary'>My projects</span>
          <Link to='/projects' className='font-semibold text-blue-600'>View all</Link>
        </div>
      {projects.map((project,index) =>
        <div key={index} className='m-auto mb-5'>
          <FeaturedCard project={project}/>
        </div>)
      }
      </div>
    </div>
  )
}

export default FeaturedProjects