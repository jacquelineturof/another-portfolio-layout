import React from 'react'
// import Particles from 'react-particles-js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './MainHeader.module.css'

const MyParticles = () => (
    <div className = { classes.Particles }>
    <Particles
        params={{
"particles": {
    "number": {
        "value": 30,
        "density": {
            "enable": true,
            "value_area": 1500
        }
    },
    "size": {
        "value": 3
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        }
    }
}
}} />
    </div>
)

const Header = () => (
    <header className = { classes.Container }>
        <div className = { classes.Overlay }>
            <h1 className = { classes.Name }>Jacqueline <span className = { classes.HighLight }>Turof</span></h1>
            <h4 className = { classes.Title }>Full Stack Developer</h4>
            {/* <MyParticles /> */}
            <FontAwesomeIcon
                icon = { [ 'fas', 'chevron-down' ] } 
                className = { classes.Icon } />
        </div>
    </header>
)

export default Header 