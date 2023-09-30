import React from 'react'
import IconSocial from '../../components/IconSocial'
import { graphql, useStaticQuery } from 'gatsby'

export default function Simple() {
    const { sanityFooter } = useStaticQuery(query)

    // console.log(sanityFooter.socialIcons)

    return (
        <footer>
            <div className='m-auto flex flex-col items-start'>
                <div className='flex w-full flex-row gap-5 p-5 justify-center'>
                    {sanityFooter.socialIcons.map((icon) => (
                        <IconSocial key={icon._key} classes='text-textPrimary hover:text-cyan-500 hover:scale-[1.15] 4xl:text-4xl' socialLink={icon.socialLink} icon={icon.icon} size={icon.size} />))}
                </div>
                <div className='flex justify-center align-top m-auto w-full px-5 pb-5'>
                    <span className='text-xs text-textPrimary'>{sanityFooter.footer}</span>
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