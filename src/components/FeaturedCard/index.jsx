import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function FeaturedCard({ project }) {
  return (
    <div className='max-w-md max-h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl p-0.5 mb-5'>
      <div className='flex flex-col gap-5 mx-auto p-5 rounded-xl bg-background min-h-full items-center'>
        <Link
          to={`/projects/${project.slug.current}`}
          className='h-56 w-56 sm:h-72 sm:w-72'>
          <GatsbyImage
            className='rounded-lg object-cover hover:scale-110 transition-all'
            alt={project.title}
            image={project.image.asset.gatsbyImageData}
          />
        </Link>
        <h2 className='text-3xl 4xl:text-4xl break-normal font-semibold text-textPrimary hover:text-primary transition-all'>
          <Link 
          to={`/projects/${project.slug.current}`}
          className='rounded-lg overflow-hidden sm:flex-[1_1_0%]'>{project.title}</Link></h2>
        <div className='flex flex-row w-full m-auto gap-3 text-textSecondary 4xl:text-xl'>
          <span className='px-3 text-textSecondary bg-dark font-bold rounded-full 4xl:text-x'>{project.year}</span>
          <span className='text-textSecondary text-lg 4xl:text-xl'>{project.type.join(', ')}</span>
        </div>
        <p>{project.description}</p>

      </div>
    </div>
  )
}

export default FeaturedCard
