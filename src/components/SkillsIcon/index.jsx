import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/font-awesome'

function SkillsIcon({classes, icon, size, color}) {
    return (
      <FontAwesomeIcon className={classes} icon={icon} size={size} style={{color: `${color}`}} />
    )
}

export default SkillsIcon

// style={{color: {color},}}