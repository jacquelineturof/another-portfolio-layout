import React from 'react'

import SocialMedia from '../components/SocialMedia'

import classes from './AboutMe.module.css'

const AboutMe = () => (
    <div className = { classes.Container }>
        <div className = { classes.BioContainer }>
            <p className = { classes.Bio }>
                My coding journey began with classes at <span className = { classes.Bold }>Oregon State University</span>.
                I began to fall in love with programming while taking a <span className = { classes.Bold }>Data Structures</span> course.
                After my academic training I became interested in web development and earned
                my <span className = { classes.Bold }>certification in Java 8</span>. I have since moved to a <span className = { classes.Bold }>Javascript</span> stack and love
                the open community I have found. I strive to learn something new each day and I'm
                looking forward to a long, happy career as a web developer. I can't wait to see what
                we can do!
            </p>
        </div>
        {/* <SocialMedia /> */}
    </div>
)

export default AboutMe