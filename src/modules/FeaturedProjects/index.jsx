import React from 'react'
import FeaturedCard from '../../components/FeaturedCard'
import { Link } from 'gatsby-link'

function FeaturedProjects({ projects }) {
  return (
    <div>
      <div className='m-auto flex flex-col items-start p-5'>
        <div className='flex justify-between m-auto w-full text-left py-5'>
          <span className='text-xl md:text-2xl 4xl:text-5xl font-semibold text-textPrimary'>My projects</span>
          <Link to='/projects' className='font-semibold text-blue-600 4xl:text-xl'>View all</Link>
        </div>
        <div className='flex flex-col w-full lg:flex-row gap-5 pb-5 justify-center'>
          {projects.map((project,index) =>
              <FeaturedCard project={project}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects