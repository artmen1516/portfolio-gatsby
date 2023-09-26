import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/font-awesome'

function IconSocial({classes,socialLink, icon, size}) {
    return (
        <a href={socialLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={classes} icon={icon} size={size} />
        </a>
    )
}

export default IconSocial
