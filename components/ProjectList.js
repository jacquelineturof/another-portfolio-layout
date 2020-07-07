import React from 'react'

import classes from './ProjectList.module.css'

const Project = ({ name, description, href }) => (
    <a className = { classes.Card } href = { href } target = "_blank">
        <h5 className = { classes.ProjectName }>{ name }</h5>
        <p className = { classes.ProjectDescription }>
            { description }
        </p>
    </a>
)

const ProjectList = () => (
    <div className = { classes.Container }>
        <Project 
            name = "Nasa Viewer"
            description = "A UI built with React, so users can search NASA's Image Database."
            href = "https://intense-falls-62836.herokuapp.com/" />
        <Project
            name = "Book Shelf"
            description = "A full stack application built with MERN. Features full authentication and account verification." 
            href = "https://turof-book-app.herokuapp.com/" />
        <Project
            name = "Forecast"
            description = "A UI for a user to add in their zip code and get their forecast. The address is converted into coordinates with google's geomapping api." 
            href = "https://sleepy-lowlands-66314.herokuapp.com/"  />
    </div>
)

export default ProjectList