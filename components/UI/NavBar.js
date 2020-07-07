import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './NavBar.module.css'

const NavLink = ({ href, icon, label }) => (
    <Link href = { href }>
        <a className = { classes.Link }>
            <FontAwesomeIcon
                icon = { [ 'fas', icon ] } 
                className = { classes.Icon } />
            <p className = { classes.Label }>{ label }</p>
        </a>
    </Link>
)

const NavBar = () => (
    <nav className = { classes.NavBar }>
        <div className = { classes.NameContainer }>
            <h1 className = { classes.Name }>Jacqueline Turof</h1>
        </div>
        <div className = { classes.LinksContainer }>
            <NavLink href = "/" icon = "home" label = "Home" />
            <NavLink href = "/projects" icon = "terminal" label = "Projects" />
            <NavLink href = "/contact" icon = "envelope-open-text" label = "Contact" />
        </div>
    </nav>
)

export default NavBar