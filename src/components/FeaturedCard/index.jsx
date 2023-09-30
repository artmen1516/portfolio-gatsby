import React from 'react'
// import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function FeaturedCard({ project }) {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl p-0.5'>
      <div className='flex flex-col gap-5 rounded-xl bg-background p-5 items-center'>
        <Link
          to={`/projects/${project.slug.current}`}
          className='h-56 w-56 sm:h-72 sm:w-72'>
          <GatsbyImage
            className='rounded-lg object-cover hover:scale-110 transition-all'
            alt={project.title}
            image={project.image.asset.gatsbyImageData}
          />
        </Link>

        <div className='flex flex-col gap-4'>
          <h3 className='text-3xl 4xl:text-4xl font-semibold text-textPrimary hover:text-primary transition-all'>
            <Link to={`/projects/${project.slug.current}`}>{project.title}</Link>
          </h3>
          <div className='flex items-center gap-5'>
            <span className='px-3 text-textSecondary bg-dark font-bold rounded-full 4xl:text-x'>{project.year}</span>
            <span className='text-textSecondary text-lg 4xl:text-xl'>{project.type.join(', ')}</span>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
