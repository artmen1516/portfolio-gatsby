import React from 'react'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'

function Hero({ title, subtitle, imageSrc, buttonLabel, resumeFile }) {

  const handleResumeClick = () => {
    window.open(resumeFile.asset.url + '?dl=' + resumeFile.asset.originalFilename, '_blank')
  }

  return (
    <div className='flex flex-col items-center pt-5 lg:py-32 pb-6 sm:py-20 md:items-start px-5 lg:px-16 lg:mx-32 bg-white border-b-4 border-slate-200'>
      <div className='flex w-full flex-col-reverse md:flex-row items-center gap-10 mb-10 md:mb-0'>
        <div className='flex flex-col gap-5 md:gap-10'>
          <h1 className='m-auto text-center md:text-start text-2xl md:text-3xl lg:text-6xl font-semibold text-dark'>{title}</h1>
          <p className='m-auto text-dark text-justify'>{subtitle}</p>

          <Button label={buttonLabel} onClick={handleResumeClick} />
        </div>

        <div className='flex w-full justify-center'>
          <Avatar imageSrc={imageSrc} />
        </div>

      </div>
    </div>
  )
}

export default Hero
