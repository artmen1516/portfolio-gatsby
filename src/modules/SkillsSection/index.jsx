import React from 'react'
import SkillsIcon from '../../components/SkillsIcon'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/font-awesome'

export default function SkillsSection() {
  const { sanitySkills } = useStaticQuery(query)

  return (
    <div>
      <div className='m-auto flex flex-col items-start p-5'>
        <div className='flex justify-between m-auto w-full text-left py-5'>
          <span className='text-xl md:text-2xl 4xl:text-5xl font-semibold text-textPrimary'>My Skills</span>
        </div>
        {/* <div className='flex flex-row w-full flex-wrap gap-5 pb-5 justify-center animate-infinite-scroll'> */}
        <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
          <div className='flex items-center justify-center md:justify-start animate-infinite-scroll'>
            {sanitySkills.skillsIcons.map((icon) =>
              <SkillsIcon key={icon._key} classes='text-5xl 4xl:text-6xl hover:text-cyan-500 hover:scale-[1.20] mx-5' icon={icon.icon} size={icon.size} color={icon.hexColor} />
              )
            }
          </div>
          <div className='flex items-center justify-center md:justify-start animate-infinite-scroll-reverse'>
            {sanitySkills.skillsIcons.map((icon) =>
              <SkillsIcon key={icon._key} classes='text-5xl 4xl:text-6xl hover:text-cyan-500 hover:scale-[1.20] mx-5' icon={icon.icon} size={icon.size} color={icon.hexColor} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

// {`${icon.hexColor} text-5xl 4xl:text-6xl hover:text-cyan-500 hover:scale-[1.15]`}

const query = graphql`
query Skills {
	sanitySkills{
    skillsIcons{
      _key
      title
      icon
      size
      hexColor
    }
  }
}
`
