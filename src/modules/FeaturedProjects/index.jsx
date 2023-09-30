import React from 'react'
import FeaturedCard from '../../components/FeaturedCard'
import { Link } from 'gatsby-link'

function FeaturedProjects({ projects }) {
  return (
    <div>
      <div className='m-auto flex flex-col items-start'>
        <div className='flex justify-between m-auto w-full text-left py-5'>
          <span className='md:text-2xl 4xl:text-5xl font-semibold text-textPrimary'>My projects</span>
          <Link to='/projects' className='font-semibold text-blue-600 4xl:text-xl'>View all</Link>
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