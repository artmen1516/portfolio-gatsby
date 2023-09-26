import React from 'react'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'

function Hero({ firstTitle, secondTitle, subtitle, imageSrc, buttonLabel, resumeFile }) {

  const handleResumeClick = () => {
    window.open(resumeFile.asset.url + '?dl=' + resumeFile.asset.originalFilename, '_blank')
  }

  return (
    <div className='flex flex-col items-center md:items-start p-5 md:p-16 lg:py-24 lg:mx-32 bg-background'>
      <div className='flex w-full flex-col-reverse md:flex-row items-center gap-10 mb-10 md:mb-0'>
        <div className='flex flex-col gap-5 md:gap-10 items-center md:items-start'>
          <div>
          <div className='flex flex-row justify-center md:justify-start'>
              <h1 className='m-auto text-center md:text-start text-2xl md:text-3xl lg:text-6xl font-semibold text-textPrimary'>{firstTitle}</h1>
              <p className='inline-block text-2xl md:text-3xl lg:text-6xl origin-center animate-wiggle'>👋🏻</p>
            </div> 
            <h1 className='m-auto text-center md:text-start text-2xl md:text-3xl lg:text-6xl font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent'>{secondTitle}</h1>
          </div>
          <p className='m-auto text-textSecondary text-justify'>{subtitle}</p>
          <div className='w-auto' >
            <Button label={buttonLabel} onClick={handleResumeClick} />
          </div>
        </div>

        <div className='flex w-full justify-center'>
          <Avatar imageSrc={imageSrc} />
        </div>

      </div>
    </div>
  )
}

export default Hero
