import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

function Avatar({imageSrc})  {
  return (
    <div className='relative h-56 w-56 sm:h-72 sm:w-72 self-end'>
      <span className='absolute top-4 rounded-full right-2 w-full block h-full bg-secondary'/>
      {/*<img className='absolute block z-20 rounded-full h-full w-full object-cover' src={imageSrc} alt='Hector Garcia Fullstack Developer'/>*/}
      <GatsbyImage className='absolute block rounded-full h-full w-full object-cover' alt='Fullstack developer' image={imageSrc?.asset?.gatsbyImageData}/>
    </div>
  )
}

export default Avatar