import React from 'react'
import IconSocial from '../../components/IconSocial'
import { graphql, useStaticQuery } from 'gatsby'

export default function Simple() {
    const { sanityFooter } = useStaticQuery(query)

    console.log(sanityFooter.socialIcons)

    return (
        <footer className='w-full bg-slate-200'>
            <div className='m-auto flex flex-col items-start lg:mx-32 bg-white px-16'>
                <div className='flex w-full flex-row gap-5 p-5 justify-center'>
                    {sanityFooter.socialIcons.map((icon) => (
                        <IconSocial key={icon._key} classes='transition ease-in-out hover:text-primary hover:scale-150' socialLink={icon.socialLink} icon={icon.icon} size={icon.size} />))}
                </div>
                <div className='flex justify-center align-top m-auto w-full px-5 pb-5'>
                    <span className='text-xs'>{sanityFooter.footer}</span>
                </div>
            </div>
        </footer>
    )
}

const query = graphql`
query Footer {
    sanityFooter {
        footer
        socialIcons{
            _key
            socialLink
            size
            icon
        }
    }
}
`