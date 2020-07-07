import React from 'react'

import Link from 'next/link'

import classes from './Footer.module.css'

const Footer = ({ path }) => {

    const projects = (
        <div className = { classes.Projects }>
            <Link href="/projects">
                <a className = { [ classes.Link, classes.ProjectsLink ].join(' ') }>
                    View My Work
                </a>
            </Link>
        </div>
    )

    let contactColor = path === 'profile' ? classes.Pink : classes.Green
    
    const contact = (
        <div className = { [ classes.Contact, contactColor ].join(' ') }>
            <Link href="/contact">
                <a className = { [ classes.Link, classes.ContactMe ].join(' ') }>
                    Contact Me
                </a>
            </Link>
        </div>
    )



    return (
        <div className = { classes.Container }> 
            { projects }
            { contact }
        </div>
    )
}

export default Footer