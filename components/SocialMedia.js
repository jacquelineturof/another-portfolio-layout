import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './SocialMedia.module.css'

const SocialMedia = () => (
    <div className = { classes.Container }>
        <a 
            className = { [ classes.Tile, classes.LinkedInBlue ].join(' ') }
            href = "https://www.linkedin.com/in/jacqueline-turof-339089143"
            _target = "blank">
            <FontAwesomeIcon
                icon = { [ 'fab', 'linkedin' ] } 
                className = { classes.Icon } />
        </a>
        <a 
            className = { [ classes.Tile, classes.Black ].join(' ') }
            href = "https://github.com/jacquelineturof"
            _target = "blank">
            <FontAwesomeIcon
                icon = { [ 'fab', 'github' ] } 
                className = { classes.Icon } />
        </a>
        <a 
            className = { [ classes.Tile, classes.GoogleRed ].join(' ')} 
            href = "mailto: jacquelineturof@gmail.com">
            <FontAwesomeIcon
                icon = { [ 'fal', 'envelope-open-text' ] } 
                className = { classes.Icon } />
        </a>
    </div>
)

export default SocialMedia